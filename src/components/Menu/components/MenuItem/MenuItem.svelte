<script>
    import { createEventDispatcher } from 'svelte';
    export let href;

    const dispatch = createEventDispatcher();

    function dispatchClick() {
        dispatch('click')
    }

</script>
<a
    href="{ href }"
    on:click="{ dispatchClick }"
    class="block mt-1 p-2 z-10 bg-gray-900 hover:text-black border"
>
    <slot />
</a>