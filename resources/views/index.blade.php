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

    <!-- Start of fifth section -->

    <x-fifth-section />

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