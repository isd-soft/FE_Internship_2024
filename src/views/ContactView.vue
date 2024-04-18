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
    import GenericToast from '@/components/generics/GenericToast.vue'
    import { useContactStore } from "@/stores/contactStore";
    import { ref, computed } from 'vue'

    const store = useContactStore()
    const submitSuccess = ref(false)
    const submitFinished = ref(false)

    
    const toastType = computed(() => {
        return submitSuccess.value ? 'success' : 'error'
    })
    const toastMessage = computed(() => {
        return submitSuccess.value ? 'Submit Successful' : 'Submit Failed'
    })

    const finishSubmitSuccess = () => {
        console.log("It's Submited")
        submitSuccess.value = true
        submitFinished.value = true
        //Needed to trigger Toast. The toast is not inside the Modal, but its appearance depends on submitFinished becoming true,
        }

        const finishSubmitFail = () => {
            submitFinished.value = true
        }
        const refreshAttempt = () => {
            submitFinished.value = false
        }
        
</script>

<template>
    <div class="contact" v-if="store.loader">
        <BannerSection title="Contact"/>
        <div class="contact__container">
            <div class="contact__text-wrapper">
                <h3 class="contact__tagline text-2xl">Get In Touch With Us</h3>
                <p class="contact__recommendation text-sm">For More Information About Our Product & Services. Please Feel Free To Drop Us <br>
                    An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
            </div>
            <div class="contact__section">
                <div class="contact__info-wrapper"> 
                    <ContactInfoCard  :icon="MapPointIcon" infoTitle="Address" :infoText="store.getFormatAddress" href="#" styles="pointer-events: none; cursor: default;"/>
                    <ContactInfoCard  :icon="PhoneIcon" infoTitle="Phone"   :infoText="store.getFormatPhones" href="tel:"/>
                    <ContactInfoCard  :icon="EmailIcon" infoTitle="Emails" :infoText="store.contactInformation.email" href="mailto:"/>
                    <ContactInfoCard  :icon="ClockIcon" infoTitle="Working Time" :infoText="store.contactInformation.workTime" href="#" styles="pointer-events: none; cursor: default;"/>
                </div>
                <GenericToast v-if="submitFinished" :message="toastMessage" :type="toastType" />
                <ContactForm 
                    class="contact__form"
                    @inputStart="refreshAttempt"
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
        padding: 38px 191px 63px 191px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 7rem;
        }
        &__text-wrapper{
            text-align: center;
        }
        &__tagline{
            font-weight: 600;
            margin-bottom: 7px;
        }
        &__recommendation{
            color: var(--color-quick-silver);
        }
        &__section{
            width: 80%;
            display: flex;
            flex-direction: column;
            gap: 7rem;
            
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
    @media only screen and (max-width: 768px) {
        .contact{
            &__container{
                padding: 4rem;
            }
            &__tagline{
                font-size: 6rem;
            }
            &__recommendation{
                font-size: 2.8rem;
            }
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
    @media only screen and (max-width: 425px) {
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
        }
    }
</style>