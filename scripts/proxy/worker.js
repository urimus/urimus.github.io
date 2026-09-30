export default {

    fetch(request) {

        if (request.method === "OPTIONS") {

            return Promise.resolve(
                new Response(null, {
                    headers: {
                        "Access-Control-Allow-Origin": "*",
                        "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
                        "Access-Control-Allow-Headers": "*"
                    }
                })
            );

        }

        var url = new URL(request.url).searchParams.get("url");

        if (!url) {

            return Promise.resolve(
                new Response("Missing url parameter", {
                    status: 400
                })
            );

        }

        return fetch(url, {
            method: "GET",
            redirect: "follow",
            headers: {
                "User-Agent": "Mozilla/5.0"
            }
        })
        .then(function(response) {

//            var headers = new Headers(response.headers);

            var headers = new Headers();

            headers.set(
                "Content-Type",
                response.headers.get("Content-Type") || "text/html"
            );

            headers.set("Access-Control-Allow-Origin", "*");
            headers.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
            headers.set("Access-Control-Allow-Headers", "*");

            return new Response(response.body, {
                status: response.status,
                statusText: response.statusText,
                headers: headers
            });

        })
        .catch(function(err) {

            return new Response(err.toString(), {
                status: 500
            });

        });

    }

};