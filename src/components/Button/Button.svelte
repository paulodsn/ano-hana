<script>
    export let type = 'button';
</script>

<button
    class="shadow bg-primary hover:bg-gray-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
    type="{ type }"
>
    <slot />
</button>