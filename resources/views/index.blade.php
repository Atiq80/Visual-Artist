<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Caroline Seiffert | Visual Artist</title>
  @vite('resources/css/app.css')
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link
    href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
    rel="stylesheet">
    <link rel="icon" type="image/x-icon" href="{{ asset('materials/favicon.ico') }}">

</head>

<style>
  .split span {

    display: inline-block;

  }
</style>


<body class="font-poppins selection:text-[#eb9dff] selection:bg-[#146200]">


  <!-- Main div -->
  <div class="  bg-white overflow-hidden">




    <!-- nav goes here -->

    <x-header />

    <!-- nav ends here -->


    <!-- Start of first page -->

    <x-first-section />

    <!-- End of first page -->

    <!-- Start of second section -->

    <x-second-section />

    <!-- End of second section -->


    <hr class="mt-16 opacity-10 border-black">


    <!-- Start of third section -->

    <x-third-section />

    <!-- End of third section -->


    <!-- Start of fourth section -->

    <x-fourth-section />

    <!-- End of fourth section -->



    <hr class="mt-16 opacity-10 border-black">

    <!-- Start of fifth section | Contact -->

    <form action="mail" method="post" id="CONTACT" class=" py-16 w-full bg-white  flex items-center justify-center    z-20">
 @csrf

    <div class="form max-w-6xl flex justify-center   w-full  ">

        <div class=" h-full w-full flex px-4 flex-col max-w-2xl ">

            <h1 class="text-5xl mb-4 font-bold   selection:text-[#eb9dff] selection:bg-[#146200]">Contact</h1>

            <a href="mailto:work.special@outlook.com" target="_blank"
                class="flex items-center    gap-1 w-fit mb-8   duration-300 transition-colors hover:text-[#146200]">
                <ion-icon class="size-5 " name="mail"> </ion-icon> work.special@outlook.com
            </a>
            

            <div id="first-slot"  class="wrap  flex flex-col gap-y-6">

                <div class="div">

                    <p class="text-sm mb-2">Name</p>
                    <input id="backgroundChangeName"
                        class="block focus-visible:border-[#146200] transition-colors  w-full p-3 rounded-none focus:outline-none border-[#e5e7eb] border  border-separate"
                        required type="text" name="name" >

                        <div  id="show_alert2"  class="hidden mt-2 ">
                        <ion-icon
                        class="size-5  pr-2  text-red-500  " name="alert-circle-outline"> </ion-icon>
                            <p id="nameAlert" class=" items-center cursor-default  text-sm text-red-500 "> Message cannot be empty</p>

                        </div>


                </div>

                <div class="div2">

                    <p class="text-sm mb-2">Email</p>
                    <input id="backgroundIntoRed"
                        class="block  focus-visible:border-[#146200] transition-colors   w-full p-3 border-[#e5e7eb] border  border-separate rounded-none focus:outline-none"
                      required  type="email" name="email" >
                  
        
                    <p id="Ealert" class="hidden    items-center cursor-default mt-2 text-sm text-red-500 "><ion-icon
                            class="size-5 mr-2 " name="alert-circle-outline"> </ion-icon>Invalid email</p>

                </div>

                <div class="div3">

                    <p class="text-sm mb-2">Message</p>
                    <textarea  id="backgroundChangetext"
                        class="block focus-visible:border-[#146200] transition-colors  w-full p-3 rounded-none focus:outline-none h-full max-h-36 min-h-[3.125rem] border-[#e5e7eb] border  border-separate"
                     required name="message" id=""></textarea>

                        <div  id="show_alert"  class="hidden mt-2 ">
                        <ion-icon
                        class="size-5  pr-2  text-red-500  " name="alert-circle-outline"> </ion-icon>
                            <p id="textAlert" class=" items-center cursor-default  text-sm text-red-500 "> Message cannot be empty</p>

                        </div>

                </div>


                <button type="submit" id="submit-btn"
                    class="relative isolate items-center overflow-hidden bg-black px-6 py-3 text-sm font-semibold text-white before:absolute before:left-1/2 before:top-1/2 before:-z-10 before:aspect-square before:w-[150%] before:-translate-x-1/2 before:-translate-y-1/2 before:scale-0 before:rounded-full before:bg-secondary before:transition-transform before:duration-300 enabled:hover:before:scale-100 enabled:focus-visible:before:scale-100 disabled:opacity-70 transition-transform duration-300 pointer-events-auto before:bg-[#146200] w-full font-poppins">Reach
                    out to me
                <div id="loader" class=" hidden items-center justify-center absolute top-0 left-0 w-full h-full bg-black">
<div class="flex-col scale-[0.25] gap-4 w-full flex items-center justify-center">
  <div class="w-28 h-28 border-8 text-blue-400 text-4xl animate-spin border-gray-300 flex items-center justify-center border-t-black rounded-full">
    
  </div>
</div>
                </div></button>



            </div>

            <div id="second-slot"  class=" hidden  pt-8">
              <h1 class="  font-extrabold text-3xl " >Successfully sent!</h1>
              <p   >I will be in touch with you soon.</p>
            </div>


                 


        </div>







    </div>


</form>
    
    <!-- jeson -->

    

    <!-- End of fifth section -->

    <!-- Start of footer  -->

    <x-footer>

      <x-slot name="main" >
        
      <a class="hover:text-[#ffff] smooth-scroll text-lg mix-blend-exclusion transform ease-out transition-colors duration-300 text-[#999] "
        href="#PROJECT">projects</a>
      <a class="hover:text-[#ffff] text-lg smooth-scroll  transform ease-out transition-colors duration-300 text-[#999] "
        href="#stilllifearchive">stilllifearchive</a>
      <a class="hover:text-[#ffff] text-lg  mb-1 smooth-scroll transform ease-out transition-colors duration-300 text-[#999] "
        href="#CONTACT">contact</a>
      <a class="hover:text-[#ffff] text-lg  transform ease-out transition-colors duration-300 text-[#999] "
        href="#">imprint</a>

      </x-slot>
      

    </x-footer>

    <!-- End of footer  -->


  </div>
  <!-- End main div  -->
    

  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"
    integrity="sha512-7eHRwcbYkK4d9g/6tD/mhkf++eoTHwpNM9woBxtPUBWm67zeAfFC+HrdoE2GanKeocly/VxeLvIqwvCdk7qScg=="
    crossorigin="anonymous" referrerpolicy="no-referrer"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"
    integrity="sha512-onMTRKJBKz8M1TnqqDuGBlowlH0ohFzMXYRNebz+yOcc5TQr/zAKsthzhuv0hiyUKEiQEQXEynnXCvNTOk50dg=="
    crossorigin="anonymous" referrerpolicy="no-referrer"></script>
  <script src="{{ asset('js/gsap.js')}}"></script>
  <script src="{{ asset('js/script.js')}}"></script>
  <script type="module" src="https://cdn.jsdelivr.net/npm/ionicons@latest/dist/ionicons/ionicons.esm.js"></script>
  <script nomodule src="https://cdn.jsdelivr.net/npm/ionicons@latest/dist/ionicons/ionicons.js"></script>
</body>

</html>