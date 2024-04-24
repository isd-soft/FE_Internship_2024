<script setup>
    import AdvantageSection from "@/components/shared/AdvantageSection.vue";
    import BannerSection from "@/components/shared/BannerSection.vue"
    import ContactInfoCard from "@/components/shared/ContactInfoCard.vue"
    import ContactForm from "@/components/shared/ContactForm.vue"
    import MapPointIcon from "@/assets/icons/ContactMapPointIcon.svg"
    import ClockIcon from "@/assets/icons/ContactClockIcon.svg"
    import PhoneIcon from "@/assets/icons/ContactPhoneIcon.svg"
    import EmailIcon from "@/assets/icons/ContactEmailIcon.svg"
    import Loader from "@/assets/icons/LoaderIcon.svg"
    import {createToast} from '@/components/generics/GenericToast.vue'
    import { useContactStore } from "@/stores/contactStore";

    const store = useContactStore()

    const finishSubmitSuccess = () => {
        createToast('Submit Successful', 'success')
        }

        const finishSubmitFail = () => {
            createToast('Submit Failed', 'error')
        }
        
</script>

<template>
    <div class="contact" v-if="store.loader">
        <BannerSection title="Contact"/>
        <div class="contact__container container">
            <div class="contact__text-wrapper">
                <h3 class="contact__tagline">Get In Touch With Us</h3>
                <p class="contact__recommendation">For More Information About Our Product & Services. Please Feel Free To Drop Us
                    An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
            </div>
            <div class="contact__section section">
                <div class="contact__info-wrapper"> 
                    <ContactInfoCard  :icon="MapPointIcon" infoTitle="Address" :infoText="store.getFormatAddress" href="#" styles="pointer-events: none; cursor: default;"/>
                    <ContactInfoCard  :icon="PhoneIcon" infoTitle="Phone"   :infoText="store.getFormatPhones" href="tel:"/>
                    <ContactInfoCard  :icon="EmailIcon" infoTitle="Email" :infoText="store.contactInformation.email" href="mailto:"/>
                    <ContactInfoCard  :icon="ClockIcon" infoTitle="Working Time" :infoText="store.contactInformation.workTime" href="#" styles="pointer-events: none; cursor: default;"/>
                </div>
                <ContactForm 
                    class="contact__form"
                    @success="finishSubmitSuccess"
                    @failure="finishSubmitFail"/>
            </div>
        </div>
        <iframe class="contact__map" :src="store.contactInformation.geoCoordinates"  style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        <AdvantageSection class="contact__advantage-section"/>
    </div>
    <div v-else class="loader">
        <Loader/>
    </div>
</template>

<style lang="scss" scoped>
    .contact{
        &__container{
        padding: 0px 130px;
        display: flex;
        flex-direction: column;
        gap: 70px;
        margin-bottom: 80px;
        }
        &__text-wrapper{
            text-align: center;
            display: flex ;
            flex-direction: column;
        }
        &__tagline{
            font-weight: 600;
            margin-bottom: 7px;
            font-size: 36px;
        }
        &__recommendation{
            color: var(--color-quick-silver);
            font-size: 14px;
            width: 60%;
            align-self: center;
        }
        &__section{
            display: flex;
            flex-direction: column;
            gap: 70px;    
        }
        &__info-wrapper{
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 4.2rem;
        }
        &__form{
            display: grid;
            grid-template-rows: repeat(2, minmax(0, 1fr));
            grid-template-columns: repeat(2, minmax(0, 1fr));
            row-gap: 1.4rem;
            column-gap: 3.6rem;
        }
        &__map{
            width: 100%;
            height: 520px;
            filter: grayscale(40%);
            margin-bottom: -5px;
        }
    }
    @media screen and (max-width: 991px) {
        .contact{
            &__container{
                max-width: 878px;
                padding: 0;
                margin-bottom: 60px;
                gap: 50px;
            }

            &__section{
                gap: 50px;
            }

            &__tagline{
                font-size: 24px;
            }

            &__recommendation{
            width: 70%;
        }
        }
    }
    @media only screen and (max-width: 768px) {
        .contact{

            &__section{
                width: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;
            }
            &__form{
                width: 100%;
                display: flex;
                flex-direction: column;
            }
        }
    }
    @media only screen and (max-width: 575px) {
        .contact{
            &__section{
                width: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;
            }
            &__form{
                width: 100%;
                display: flex;
                flex-direction: column;
            }
            &__info-wrapper{
            display: grid;
            grid-template-columns: repeat(1, minmax(0, 1fr));
            gap: 4.2rem;
            }

            &__tagline{
                font-size: 24px;
            }

            &__recommendation{
                width: 80%;
                // text-align: justify;
                font-size: 12px;
        }
        }
    }
</style>