//@ts-check

/**
 * Post Route Controller
 * @param {object} router
 */
module.exports = (router) => {
    router.get("/post",
        /**
         * @param {object} req
         * @param {object} res
         */
        (req, res) => {
            const data = {
                message: "POST",
            };
            req.vueOptions.head.title = "Post Example";
            req.vueOptions.head.scripts.push({
                src: "https://unpkg.com/axios/dist/axios.min.js",
            });
            res.renderVue("post/post.vue", data, req.vueOptions);
        },
    );

    router.post("/post",
        /**
         * @param {object} req
         * @param {object} res
         */
        (req, res) => {
            const data = {
                message: "POST",
                body: req.body,
            };
            res.json(data);
        },
    );
};
