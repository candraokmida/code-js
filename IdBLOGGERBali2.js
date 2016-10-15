// --------------------------------- TONG DI MINIFY KEHED !! ----------------------
//<![CDATA[

$(document).ready(function(){
    $("#buka-menu").click(function(){
      $("#navigasi").fadeToggle();
    });
});


$(document).ready(function() {
        var a = $("a.blog-pager-older-link").attr("href");
        $("a.blog-pager-older-link").load(a + " .post-title:first", function() {
            var a = $("a.blog-pager-older-link").text();
            $("a.blog-pager-older-link").html(a + "<i class='icon-angle-right icon-large' style='padding-left:10px'></i>")
        });
        var b = $("a.blog-pager-newer-link").attr("href");
        $("a.blog-pager-newer-link").load(b + " .post-title:first", function() {
            var a = $("a.blog-pager-newer-link:first").text();
            $("a.blog-pager-newer-link").html("<i class='icon-angle-left icon-large' style='padding-right:10px'></i>" + a)
        })
    });
//]]>
