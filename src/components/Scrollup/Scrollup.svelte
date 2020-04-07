<script>
    const screenHeight = window.screen.height;
    let show = false;

    window.addEventListener('scroll', function(e) {
        var scrolled = document.scrollingElement.scrollTop;

        if (scrolled > screenHeight) {
            show = true;
        } else {
            show = false;
        }
    });
</script>

<a
    id="scroll-up"
    class:block="{ show }"
    class:hidden="{ !show }"
    class="fixed bg-primary p-3 rounded-full right-0 bottom-0 m-2 cursor-pointer"
    href="#home"
>
    <img
        src="/assets/up-arrow.svg"
        alt=""
        class="w-4"
    >
</a>