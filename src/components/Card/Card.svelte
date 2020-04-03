<script>
    import Badge from '../Badge/Badge.svelte';

    export let image;
    export let tags;
</script>
<div class="bg-white max-w-sm rounded overflow-hidden shadow-lg mt-4">
    <img
        class="w-full"
        src="{ image }"
        alt="Jintan"
    >
    <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">
            <slot name="title" />
        </div>
        <p class="text-gray-700 text-base">
            <slot />
        </p>
    </div>
    <div class="px-6 py-4">
        {#each tags as tag}
            <Badge>
                { tag }
            </Badge>
        {/each}
    </div>
</div>