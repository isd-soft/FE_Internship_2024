<script setup>
    import Advantages from "@/components/shared/Advantages.vue";
    import BannerSection from "@/components/shared/BannerSection.vue"
    import ContactInfoCard from "@/components/shared/ContactInfoCard.vue"
    import ContactForm from "@/components/shared/ContactForm.vue"
</script>

<template>
    <div>
        <BannerSection title="Contact"/>
        <div class="contact">
            <div class="contact__text">
                <h3 class="text-lg">Get In Touch With Us</h3>
                <p class="text-sm">For More Information About Our Product & Services. Please Feel Free To Drop Us <br>
                    An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
            </div>
            <div class="contact__session">
                <div class="contact__info">
                    <ContactInfoCard src="/src/assets/icons/Vector (1).svg" alt="Adress Icon" infoName="Address" info="236 5th SE Avenue, New York NY10000, United States"/>
                    <ContactInfoCard src="/src/assets/icons/Vector (2).svg" alt="Phone Icon" infoName="Phone"   info="Mobile: +(84) 546-6789Hotline: +(84) 456-6789"/>
                    <ContactInfoCard src="/src/assets/icons/bi_clock-fill.svg" alt="Clock Icon" infoName="Working Time" info="Monday-Friday: 9:00 - 22:00Saturday-Sunday: 9:00 - 21:00"/>
                </div>
                <ContactForm/>
            </div>
        </div>
        <iframe class="contact__map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2720.2304445812615!2d28.835034976908844!3d47.016081471141874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c97c2169d23a6f%3A0x8c9cf6c999802fef!2sInther%20Software%20Development!5e0!3m2!1sru!2s!4v1712302064333!5m2!1sru!2s"  style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        <Advantages/>
    </div>
</template>

<style lang="scss" scoped>
    .contact{
        padding: 98px 191px 36px 191px;
        display: flex;
        flex-direction: column;
        align-items: center;
        
        &__text{
            text-align: center;
            h3{
                font-weight: 600;
                margin: 0;
                margin-bottom: 7px;
            }
            p{
                margin: 0;
                color: gainsboro;
            }
        }
        &__session{
            display: flex;
            justify-content: space-between;
            margin-top: 82px;
            width: 80%;
            gap:110px;
        }
        &__info{
            display: flex;
            flex-direction: column;
            gap: 42px;

        }
        &__map{
            width: 100%;
            height: 520px;
            filter: grayscale(40%);
        }
    }
</style>