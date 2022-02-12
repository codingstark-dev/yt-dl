import axios, { AxiosError, AxiosRequestConfig } from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
import translate from "@vitalets/google-translate-api";
import cacheData from "memory-cache";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { lang, content, page } = req.body;
    // cacheData.clear();
    const value = cacheData.get(page + lang);
    let data = []
    if (page == "about") {

      res.setHeader("Content-Type", "text/html; charset=UTF-8");
      res.statusCode = 200;
      // console.log(value);
      if (value) {
        res.statusCode = 200;
        // console.log(value);

        return res.end(JSON.stringify(value))

        value;
      } else {
        // console.log(content);

        translate(content as string, { from: 'en', to: lang as string })
          .then((d) => {

            // console.log({ [keys[index] as string]: d.text },);

            // data.push({ [keys[index] as string]: d.text }, ...data,);
            // if (content.length === data.length && JSON.stringify(data) != '{}') {
            //   console.log(data);
            // console.log(d.text);
            return res.send(JSON.stringify(d.text))
            // }

            // res.end(
            //   d.text
            //     .replaceAll("< ", "<")
            //     .replaceAll(" >", ">")
            //     .replaceAll("& nbsp;", "&nbsp;")
            // );
            //=> I speak English
            //   console.log(d.from.language.iso);
            //=> nl




          })
        const hours = 168;

        cacheData.put(page + lang, data, hours * 1000 * 60 * 60);
        // if (data.length == 0) return null;
        res.statusCode = 200;

        // return res.end(JSON.stringify(data))
        data;
      }
    } else {
      res.setHeader("Content-Type", "text/html; charset=UTF-8");
      res.statusCode = 200;
      // console.log(value);
      if (value) {
        res.statusCode = 200;
        // console.log(value);

        return res.end(JSON.stringify(Object?.assign({}, ...(value))))


      } else {
        // console.log(content);
        content.forEach((values) => {
          let value = Object.values(values)
          var keys = Object.keys(values);
          // console.log(keys);
          // console.log(keys, Object.values(value));

          keys.forEach((key) => {
            translate(value[0] as string, { from: 'en', to: lang as string })
              .then((d) => {
                // console.log({ [keys[0] as string]: d.text });

                data.push({ [keys[0] as string]: d.text });
                if (content.length === data.length && JSON.stringify(data) != '{}') {
                  // console.log(data);
                  return res.send(JSON.stringify(Object?.assign({}, ...(data))))
                }

                // res.end(
                //   d.text
                //     .replaceAll("< ", "<")
                //     .replaceAll(" >", ">")
                //     .replaceAll("& nbsp;", "&nbsp;")
                // );
                //=> I speak English
                //   console.log(d.from.language.iso);
                //=> nl
              })
              .catch((err) => {
                res.statusCode = 500;
                res.end(err.stack)

                console.error(err);
              });

          })

        })
        const hours = 168;

        cacheData.put(page + lang, data, hours * 1000 * 60 * 60);
        // if (data.length == 0) return null;
        res.statusCode = 200;

        // return res.end(JSON.stringify(data))
        data;
      }
    }

  } catch (error) {
    res.statusCode = 500;
    res.end(error.stack)


  }

  //   const { url } = req.query;
  //   if (!url) {
  //     res.statusCode = 400;
  //     res.end(JSON.stringify({ error: "url is required" }));
  //     return;
  //   }

  //   try {
  //     const response = await axios.get("url", {
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     });
  //     res.end(JSON.stringify(response.data));
  //   } catch (err) {
  //     res.statusCode = err.response.status;
  //     res.end(JSON.stringify(err.response.data));
  //   }

}


