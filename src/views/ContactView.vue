<script setup>
    import Advantages from "@/components/shared/Advantages.vue";
    import ImageNavCard from "@/components/shared/ImageNavCard.vue"
    import ContactInfoCard from "@/components/shared/ContactInfoCard.vue"
    import ContactForm from "@/components/shared/ContactForm.vue"
</script>

<template>
    <div>
        <ImageNavCard navName="Contact"/>
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
    }
</style>