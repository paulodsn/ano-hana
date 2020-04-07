<script>
    export let image;

</script>
<header
    class="h-full bg-center bg-cover bg-no-repeat bg-fixed"
    style="{`background-image: url('${image}')`}"
>
    <div class="flex items-center justify-center h-full w-full">
        <slot />
    </div>
</header>