jQuery(document).ready(function($) {
    $(".tweet").tweet({
        join_text: "auto",
        username: "cirpo",
        list: "webdebs",
        avatar_size: 48,
        count: 30,
        auto_join_text_default: "",
        auto_join_text_ed: "",
        auto_join_text_ing: "",
        auto_join_text_reply: "",
        auto_join_text_url: "",
        loading_text: "loading tweets..."
    });
})      

