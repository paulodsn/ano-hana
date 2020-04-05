<script>
    import Layout from './components/Layout/Layout.svelte';
    import Card from './components/Card/Card.svelte';
    import Input from './components/Input/Input.svelte';
    import Textarea from './components/Textarea/Textarea.svelte';
    import Button from './components/Button/Button.svelte';
    import Menu from './components/Menu/Menu.svelte';

    const items = [
        { href: '#home', label: 'Homepage' },
        { href: '#characters', label: 'Characters' },
        { href: '#about', label: 'About' },
        { href: '#infos', label: 'Infos' },
        { href: '#other-infos', label: 'Other infos' },
    ];
</script>

<Layout>
    <!-- NAVEGATION -->
    <Menu items="{ items }" />
    <!-- END NAVEGATION -->
    <!-- SECTION ONE -->
    <div id="home" class="section">
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
    <div id="characters">
        <div class="container mx-auto px-4">
            <Card
                image="/assets/jintan.jpg"
                tags={[
                    '#Protagonist',
                    '#Leader',
                ]}
            >
                <span slot="title">
                    Jinta "Jintan" Yadomi
                </span>

                <span>
                    Jinta "Jintan" Yadomi (宿海 仁太 Yadomi Jinta), called "Jintan"
                    (じんたん), is the main male character of the series. In the past,
                    Jinta was the leader of his group, the Super Peace Busters.
                    Spoiler Warning: Plot and/or ending details follow!
                </span>
            </Card>

            <Card
                image="/assets/menma.jpg"
                tags={[
                    '#Protagonist',
                ]}
            >
                <span slot="title">
                    Meiko "Menma" Honma
                </span>

                <span>
                    Meiko Honma, who is also called by her nickname Menma, is the female
                    protagonist in the story whose ghost shows up to Jinta Yadomi because of
                    her wish that he and his friends must grant. She is a childlike girl who was
                    part of the Super Peace Busters before she died because of an accident.
                </span>
            </Card>

            <Card
                image="/assets/anaru.png"
                tags={[
                    '#Friend',
                ]}
            >
                <span slot="title">
                    Naruko "Anaru" Anjou
                </span>

                <span>
                    Naruko "Anaru" Anjou. Naruko Anjou, usually called "Anaru", is a
                    childhood friend of Jinta Yadomi and Meiko Honma and part of the
                    Super Peace Busters. Spoiler Warning: Plot and/or ending details follow!
                </span>
            </Card>

            <Card
                image="/assets/yukiatsu.jpg"
                tags={[
                    '#Friend',
                ]}
            >
                <span slot="title">
                    Atsumu "Yukiatsu" Matsuyuki
                </span>

                <span>
                    Atsumu "Yukiatsu" Matsuyuki is a childhood friend of Jinta, Naruko,
                    Chiriko, Tetsudō and Menma. Atsumu and Chiriko attend the same elite
                    high school, which Jinta was unable to enter due to failing the
                    entrance exams and a member of the Super Peace Busters.
                </span>
            </Card>

            <Card
                image="/assets/chiriko.jpg"
                tags={[
                    '#Friend',
                ]}
            >
                <span slot="title">
                    Chiriko "Tsuruko" Tsurumi
                </span>

                <span>
                    Chiriko Tsurumi (鶴見 知利子 Tsurumi Chiriko), called "Tsuruko",
                    is part of the Super Peace Busters. She is the quiet observer of
                    the group and has an extremely serious and logical personality.
                    She and Atsumu Matsuyuki are the only two that remain close friends as
                    the years pass and attend the same elite high school.
                </span>
            </Card>
        </div>
    </div>
    <!-- END SECTION TWO -->
    <!-- SECTION THREE -->
    <div id="about" class="my-8">
        <div class="section-three h-full bg-center bg-cover bg-no-repeat bg-fixed">
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
    <!-- END SECTION THREE -->
    <!-- SECTION FOUR -->
    <div id="infos">
        <div class="container mx-auto px-4">
            <Card
                image="/assets/jintan.jpg"
                tags={[
                    '#Protagonist',
                    '#Leader',
                ]}
            >
                <span slot="title">
                    Jinta "Jintan" Yadomi
                </span>

                <span>
                    Jinta "Jintan" Yadomi (宿海 仁太 Yadomi Jinta), called "Jintan"
                    (じんたん), is the main male character of the series. In the past,
                    Jinta was the leader of his group, the Super Peace Busters.
                    Spoiler Warning: Plot and/or ending details follow!
                </span>
            </Card>

            <Card
                image="/assets/menma.jpg"
                tags={[
                    '#Protagonist',
                ]}
            >
                <span slot="title">
                    Meiko "Menma" Honma
                </span>

                <span>
                    Meiko Honma, who is also called by her nickname Menma, is the female
                    protagonist in the story whose ghost shows up to Jinta Yadomi because of
                    her wish that he and his friends must grant. She is a childlike girl who was
                    part of the Super Peace Busters before she died because of an accident.
                </span>
            </Card>

            <Card
                image="/assets/anaru.png"
                tags={[
                    '#Friend',
                ]}
            >
                <span slot="title">
                    Naruko "Anaru" Anjou
                </span>

                <span>
                    Naruko "Anaru" Anjou. Naruko Anjou, usually called "Anaru", is a
                    childhood friend of Jinta Yadomi and Meiko Honma and part of the
                    Super Peace Busters. Spoiler Warning: Plot and/or ending details follow!
                </span>
            </Card>

            <Card
                image="/assets/yukiatsu.jpg"
                tags={[
                    '#Friend',
                ]}
            >
                <span slot="title">
                    Atsumu "Yukiatsu" Matsuyuki
                </span>

                <span>
                    Atsumu "Yukiatsu" Matsuyuki is a childhood friend of Jinta, Naruko,
                    Chiriko, Tetsudō and Menma. Atsumu and Chiriko attend the same elite
                    high school, which Jinta was unable to enter due to failing the
                    entrance exams and a member of the Super Peace Busters.
                </span>
            </Card>
        </div>
    </div>
    <!-- END SECTION  FOUR-->
    <!-- SECTION FIVE -->
    <div id="other-infos">
        <div class="container mx-auto px-4">
            <Card
                image="/assets/jintan.jpg"
                tags={[
                    '#Protagonist',
                    '#Leader',
                ]}
            >
                <span slot="title">
                    Jinta "Jintan" Yadomi
                </span>

                <span>
                    Jinta "Jintan" Yadomi (宿海 仁太 Yadomi Jinta), called "Jintan"
                    (じんたん), is the main male character of the series. In the past,
                    Jinta was the leader of his group, the Super Peace Busters.
                    Spoiler Warning: Plot and/or ending details follow!
                </span>
            </Card>
        </div>
    </div>
    <!-- END SECTION  FIVE-->
    <!-- SECTION SIX -->
    <div class="form-background my-8 mx-auto bg-no-repeat bg-cover bg-center">
        <div class="px-4 py-8">
            <h1 class="text-4xl text-center text-white">
                Contact Form
            </h1>
            <div class="px-6 my-4 shadow bg-white rounded-lg text-gray-700 p-4">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Alias quaerat ut perspiciatis dolores tenetur perferendis
                explicabo aliquid optio officiis consectetur eveniet neque cum amet,
                inventore recusandae placeat ea veniam pariatur.
            </div>
            <form>
                <div class="mb-4">
                    <Input id="name" placeholder="Name" />
                </div>
                <div class="mb-4">
                    <Input id="email" placeholder="Email" type="email" />
                </div>
                <div class="mb-4">
                    <Input id="subject" placeholder="Subject" />
                </div>
                <div class="mb-4">
                    <Textarea id="message" placeholder="Your message here..." />
                </div>
                <div>
                    <Button>
                        Send
                    </Button>
                </div>
            </form>
        </div>
    </div>
    <!-- END SECTION  SIX-->
    <!-- SECTION SEVEN  -->
    <div>
        <h1 class="text-4xl text-center">
            Lorem ipsum
        </h1>
        <div class="text-center px-10 pb-8">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Labore quae facere sed officia eum dignissimos
            natus quasi doloremque? Dolor aut pariatur
            accusamus exercitationem quaerat? Tempore cum earum aperiam sit at.
        </div>
        <hr/>
        <div class="py-8 text-center">
            Copyright © 2084 Your Company Name
        </div>
    </div>
    <!-- END SECTION SEVEN  -->
</Layout>

<style type="text/postcss">
    .section {
        height: 100vh;
    }

    .header {
        background-image: url('/assets/header.jpg');
    }

    .form-background {
        background-image: url('/assets/anohana-2.jpg');
    }

    .section-three {
        background-image: url('/assets/anohana.jpg');
        text-shadow: 2px 2px #aaa;
        height: 400px;
    }
</style>
