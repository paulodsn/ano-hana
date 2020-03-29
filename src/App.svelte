<script>
    import Layout from './app/layout.svelte';
</script>

<Layout>
    <!-- NAVEGATION -->
    <div class="fixed w-full flex items-center justify-end flex-wrap p-2">
        <div class="block lg:hidden">
            <button class="flex items-center px-3 py-2 rounded bg-gray-900 text-gray-100">
                <svg class="fill-current h-4 w-4" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
            </button>
        </div>
        <div class="w-full flex-grow mt-2 hidden lg:block">
            <div class="text-white text-center">
                <a
                    href="/"
                    class="block mt-1 p-2 z-10 bg-gray-900 hover:text-black border"
                >
                        Homepage
                </a>
                <a
                    href="/"
                    class="block mt-1 p-2 z-10 bg-gray-900 hover:text-black"
                >
                    About Us
                </a>
                <a
                    href="/"
                    class="block mt-1 p-2 z-10 bg-gray-900 hover:text-black"
                >
                    Services
                </a>
                <a
                    href="/"
                    class="block mt-1 p-2 z-10 bg-gray-900 hover:text-black"
                >
                    Contact
                </a>
                <a
                    href="/"
                    class="block mt-1 p-2 z-10 bg-gray-900 hover:text-black"
                >
                    External
                </a>
            </div>
        </div>
    </div>
    <!-- END NAVEGATION -->
    <!-- SECTION ONE -->
    <div class="section">
        <header class="header h-full bg-center bg-cover bg-no-repeat bg-fixed">
            <div class="flex items-center justify-center h-full w-full">
                <div class="text-center">
                    <h1 class="text-6xl font-medium">
                        Ano Hana
                    </h1>
                    <h4 class="text-2xl font-medium">
                        An anime for cry
                    </h4>
                </div>
            </div>
        </header>
    </div>
    <!-- END SECTION ONE -->
    <!-- SECTION TWO -->
    <div>
        <div class="container mx-auto px-4">
            <div class="bg-white max-w-sm rounded overflow-hidden shadow-lg mt-4">
                <img
                    class="w-full"
                    src="/assets/jintan.jpg"
                    alt="Jintan"
                >
                <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">
                        Jinta "Jintan" Yadomi
                    </div>
                    <p class="text-gray-700 text-base">
                        Jinta "Jintan" Yadomi (宿海 仁太 Yadomi Jinta), called "Jintan"
                        (じんたん), is the main male character of the series. In the past,
                        Jinta was the leader of his group, the Super Peace Busters.
                        Spoiler Warning: Plot and/or ending details follow!
                    </p>
                </div>
                <div class="px-6 py-4">
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                        #protagonist
                    </span>
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                        #leader
                    </span>
                </div>
            </div>
            <div class="bg-white max-w-sm rounded overflow-hidden shadow-lg mt-4">
                <img
                    class="w-full"
                    src="/assets/menma.jpg"
                    alt="Mmenma"
                >
                <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">
                        Meiko "Menma" Honma
                    </div>
                    <p class="text-gray-700 text-base">
                        Meiko Honma, who is also called by her nickname Menma, is the female
                        protagonist in the story whose ghost shows up to Jinta Yadomi because of
                        her wish that he and his friends must grant. She is a childlike girl who was
                        part of the Super Peace Busters before she died because of an accident.
                    </p>
                </div>
                <div class="px-6 py-4">
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                        #protagonist
                    </span>
                </div>
            </div>
            <div class="bg-white max-w-sm rounded overflow-hidden shadow-lg mt-4">
                <img
                    class="w-full"
                    src="/assets/anaru.png"
                    alt="Anaru"
                >
                <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">
                        Naruko "Anaru" Anjou
                    </div>
                    <p class="text-gray-700 text-base">
                        Naruko "Anaru" Anjou. Naruko Anjou, usually called "Anaru", is a
                        childhood friend of Jinta Yadomi and Meiko Honma and part of the
                        Super Peace Busters. Spoiler Warning: Plot and/or ending details follow!
                    </p>
                </div>
                <div class="px-6 py-4">
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                        #friend
                    </span>
                </div>
            </div>
            <div class="bg-white max-w-sm rounded overflow-hidden shadow-lg mt-4">
                <img
                    class="w-full"
                    src="/assets/yukiatsu.jpg"
                    alt="Yukiatsu"
                >
                <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">
                        Atsumu "Yukiatsu" Matsuyuki
                    </div>
                    <p class="text-gray-700 text-base">
                        Atsumu "Yukiatsu" Matsuyuki is a childhood friend of Jinta, Naruko,
                        Chiriko, Tetsudō and Menma. Atsumu and Chiriko attend the same elite
                        high school, which Jinta was unable to enter due to failing the
                        entrance exams and a member of the Super Peace Busters.
                    </p>
                </div>
                <div class="px-6 py-4">
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                        #friend
                    </span>
                </div>
            </div>
            <div class="bg-white max-w-sm rounded overflow-hidden shadow-lg mt-4">
                <img
                    class="w-full"
                    src="/assets/chiriko.jpg"
                    alt="Chiriko"
                >
                <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">
                        Chiriko "Tsuruko" Tsurumi
                    </div>
                    <p class="text-gray-700 text-base">
                        Chiriko Tsurumi (鶴見 知利子 Tsurumi Chiriko), called "Tsuruko",
                        is part of the Super Peace Busters. She is the quiet observer of
                        the group and has an extremely serious and logical personality.
                        She and Atsumu Matsuyuki are the only two that remain close friends as
                        the years pass and attend the same elite high school.
                    </p>
                </div>
                <div class="px-6 py-4">
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                        #friend
                    </span>
                </div>
            </div>
        </div>
    </div>
    <!-- END SECTION TWO -->
    <!-- SECTION THREE -->
    <div class="my-8 rel">
        <div class="section-three relative bg-center bg-no-repeat bg-cover bg-top bg-no-repeat">
            <div class="flex items-center justify-center h-full w-full">
                <div class="text-white text-center p-2">
                    <h1 class="text-3xl font-bold">
                        Prepare to be Depressed
                    </h1>
                    <h4 class="text-2xl font-medium">
                        If you haven't guessed by reading everything
                        else so far, Anohana is not a happy story.
                    </h4>
                </div>
            </div>
        </div>
    </div>
    <!-- SECTION THREE -->

</Layout>

<style type="text/postcss">
    .section {
        height: 100vh;
    }

    .header {
        background-image: url('/assets/header.jpg');
    }

    .section-three {
        background-image: url('/assets/anohana.jpg');
        text-shadow: 2px 2px #aaa;
        height: 400px;
    }
</style>
