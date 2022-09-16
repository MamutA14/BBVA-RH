export async function Ajax(AJson) {
    // const loader = document.getElementById("main-loader");
    // if (loader != null) loader.style.display = "block";
    const {
        metodo,
        url,
        params,
        cbSuccess
    } = AJson;
    const $url = (url) ? url : "https://jsonplaceholder.typicode.com/users"
    const options = {
        "method": metodo,
        "mode": "no-cors",
        "headers": {
            "Content-type": "application/json; charset=utf-8"
        },
        "data": params
    };
    await axios($url, options)
        .then(response => {
            cbSuccess(response.data);
        })
        .catch(e => {
            cbSuccess(e);
        });
    // if (loader != null) loader.style.display = "none";
}