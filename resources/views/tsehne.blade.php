<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>T / Sehne ― Projects | Caroline Seiffert</title>
    @vite('resources/css/app.css')
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
        rel="stylesheet">
    <link rel="icon" type="image/x-icon" href="{{ asset('materials/favicon.ico') }}">
</head>

<body class="font-poppins">


    <div class="main h-full w-full  selection:text-[#eb9dff] selection:bg-[#146200]">


        <!-- Start header -->
        <x-header />
        <!-- End header -->


        <!-- first page -->
        <section class=" h-screen border-b border-[#9999996b]  relative bg-white   w-full flex flex-col">

            <a href="/"
                class="absolute group  top-24 mix-blend-exclusion text-white flex items-center justify-center left-4 md:left-6 lg:left-12">
                <div class=" h-6 w-5   flex  relative overflow-hidden ">
                    <svg xmlns="http://www.w3.org/2000/svg"
                        class="ionicon group-hover:-left-4 absolute size-[24px] transition-all ease-out   duration-200 "
                        viewBox="0 0 512 512">
                        <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                            stroke-width="36" d="M328 112L184 256l144 144" />
                    </svg>

                    <svg xmlns="http://www.w3.org/2000/svg"
                        class="ionicon size-[24px]   group-hover:right-0  -right-5 transition-all ease-out duration-200 absolute"
                        viewBox="0 0 512 512">
                        <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                            stroke-width="36" d="M244 400L100 256l144-144M120 256h292" />
                    </svg>
                </div>

                <span class="text-xl mx-1">Go back</span>
            </a>

            <img src="materials/Shirt.webp" class="w-full h-[93%] lg:h-[80%] md:h-[85%] object-cover" alt="">


            <div
                class="flex items-center justify-between w-full h-[7%] lg:h-[20%] lg:px-12 md:h-[15%] md:px-10 px-4 bg-white">

                <h4
                    class=" font-poppins   font-medium text-white  leading-snug   text-2xl mix-blend-exclusion sm:text-4xl">
                    T / Sehne</h4>
                <p class="font-poppins  mix-blend-exclusion text-white  text-[0.75rem] sm:text-sm">April 2022</p>



            </div>



        </section>
        <!-- end of first page -->

        <!-- 2ns page -->
        <section class="w-full h-full  bg-white ">


            <div class="  flex items-center justify-normal px-4  w-full py-16  border-b  border-[#9999996b] ">

                <h4
                    class=" font-poppins     text-white  leading-snug  font-extralight  lg:font-light     lg:px-36 text-2xl mix-blend-exclusion sm:text-2xl">
                    Moods for THE EYE THAT NEVER CLOSES WINTER / 2022 COLLECTION of T / Sehne Studio.</h4>

            </div>


            <!-- image galery -->


            <div class="flex flex-col sm:flex-row mb-24  gap-y-24 sm:gap-y-0 sm:gap-x-24 mt-20  w-full h-full ">
                <!-- left side  -->
                <div class="h-full   md:w-[50vw] flex flex-col gap-y-24">

                    <img id="animation-opacity" src="materials/Tshene1.webp" class=" w-full h-full inline-block" alt="">





                </div>
                <!-- Right side  -->
                <div class="h-full w-full gap-y-24 flex-col flex md:w-[50vw]">

                    <img id="animation-opacity4" src="materials/Tshene2.webp" class="w-full h-full" alt="">


                </div>
            </div>




            <div
                class="  flex items-center justify-normal px-4 lg:px-12  w-full h-40 border-b border-t border-[#9999996b] ">

                <a href="/"
                    class=" group   top-24 mix-blend-exclusion text-white   flex items-center justify-center left-16">
                    <div class=" h-6 w-5   flex  relative overflow-hidden ">
                        <svg xmlns="http://www.w3.org/2000/svg"
                            class="ionicon group-hover:-left-4 absolute size-[24px] transition-all ease-out   duration-200 "
                            viewBox="0 0 512 512">
                            <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                stroke-width="36" d="M328 112L184 256l144 144" />
                        </svg>

                        <svg xmlns="http://www.w3.org/2000/svg"
                            class="ionicon size-[24px]   group-hover:right-0  -right-5 transition-all ease-out duration-200 absolute"
                            viewBox="0 0 512 512">
                            <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                stroke-width="36" d="M244 400L100 256l144-144M120 256h292" />
                        </svg>
                    </div>

                    <span class="text-xl font-[200] mx-1">Go back</span>
                </a>


            </div>



        </section>
        <!-- end of 2nd page -->


        <!-- Start of footer  -->
        <x-footer>
            <x-slot name="main">

                <a class="hover:text-[#ffff] smooth-scroll text-lg mix-blend-exclusion transform ease-out transition-colors duration-300 text-[#999] "
                    href="/#PROJECT">projects</a>
                <a class="hover:text-[#ffff] text-lg smooth-scroll  transform ease-out transition-colors duration-300 text-[#999] "
                    href="/#stilllifearchive">stilllifearchive</a>
                <a class="hover:text-[#ffff] text-lg  mb-1 smooth-scroll transform ease-out transition-colors duration-300 text-[#999] "
                    href="/#CONTACT">contact</a>
                <a class="hover:text-[#ffff] text-lg  transform ease-out transition-colors duration-300 text-[#999] "
                    href="#">imprint</a>

            </x-slot>
        </x-footer>
        <!-- End of footer  -->




    </div>
    <!-- main div -->

     <x-mail/>


    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"
        integrity="sha512-7eHRwcbYkK4d9g/6tD/mhkf++eoTHwpNM9woBxtPUBWm67zeAfFC+HrdoE2GanKeocly/VxeLvIqwvCdk7qScg=="
        crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"
        integrity="sha512-onMTRKJBKz8M1TnqqDuGBlowlH0ohFzMXYRNebz+yOcc5TQr/zAKsthzhuv0hiyUKEiQEQXEynnXCvNTOk50dg=="
        crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script src="{{ asset('js/gsap2.js')}}"></script>
    <script type="module" src="https://cdn.jsdelivr.net/npm/ionicons@latest/dist/ionicons/ionicons.esm.js"></script>
    <script nomodule src="https://cdn.jsdelivr.net/npm/ionicons@latest/dist/ionicons/ionicons.js"></script>

</body>

</html>