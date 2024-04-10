<script setup>
    import AdvantageSection from "@/components/shared/AdvantageSection.vue";
    import BannerSection from "@/components/shared/BannerSection.vue"
    import ContactInfoCard from "@/components/shared/ContactInfoCard.vue"
    import ContactForm from "@/components/shared/ContactForm.vue"
    import MapPointIcon from "@/assets/icons/ContactMapPointIcon.svg"
    import ClockIcon from "@/assets/icons/ContactClockIcon.svg"
    import PhoneIcon from "@/assets/icons/ContactPhoneIcon.svg"
    import GenericToast from '@/components/generics/GenericToast.vue'
    import { useVfm } from 'vue-final-modal'
    import { ref, computed } from 'vue'

    const vfm = useVfm()

    const loginSuccess = ref(false)
    const loginFinished = ref(false)
    const toastType = computed(() => {
        return loginSuccess.value ? 'success' : 'error'
    })
    const toastMessage = computed(() => {
        return loginSuccess.value ? 'Submit Successful' : 'Submit Failed'
    })

    const finishLoginSuccess = () => {
        console.log("It's Submited")
        loginSuccess.value = true
        loginFinished.value = true
        //Needed to trigger Toast. The toast is not inside the Modal, but its appearance depends on loginFinished becoming true,
        //So the modal closing is done 100 sec after finish of this function async
        setTimeout(() => {
            vfm.closeAll(vfm.openedModals)
        }, 100)
        }

        const finishLoginFail = () => {
            loginFinished.value = true
        }
        const refreshAttempt = () => {
            loginFinished.value = false
        }
</script>

<template>
    <div class="contact">
        <BannerSection title="Contact"/>
        <div class="contact__container">
            <div class="contact__text-wrapper">
                <h3 class="contact__tagline text-2xl">Get In Touch With Us</h3>
                <p class="contact__recommendation text-sm">For More Information About Our Product & Services. Please Feel Free To Drop Us <br>
                    An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
            </div>
            <div class="contact__section">
                <div class="contact__info-wrapper">
                    <ContactInfoCard  :icon="MapPointIcon" infoTitle="Address" infoTextFirst="236 5th SE Avenue, " infoTextSecond="New York NY10000, United States"/>
                    <ContactInfoCard  :icon="ClockIcon" infoTitle="Phone"   infoTextFirst="Mobile: +(84) 546-6789" infoTextSecond="Hotline: +(84) 456-6789"/>
                    <ContactInfoCard  :icon="PhoneIcon" infoTitle="Working Time" infoTextFirst="Monday-Friday: 9:00 - 22:00" infoTextSecond="Saturday-Sunday: 9:00 - 21:00"/>
                </div>
                <GenericToast v-if="loginFinished" :message="toastMessage" :type="toastType" />
                <ContactForm 
                    class="contact__form"
                    @inputStart="refreshAttempt"
                    @success="finishLoginSuccess"
                    @failure="finishLoginFail"/>
            </div>
        </div>
        <iframe class="contact__map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2720.2304445812615!2d28.835034976908844!3d47.016081471141874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c97c2169d23a6f%3A0x8c9cf6c999802fef!2sInther%20Software%20Development!5e0!3m2!1sru!2s!4v1712302064333!5m2!1sru!2s"  style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        <AdvantageSection/>
    </div>
</template>

<style lang="scss" scoped>
    .contact{
        &__container{
        padding: 38px 191px 63px 191px;
        display: flex;
        flex-direction: column;
        align-items: center;
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
            display: flex;
            margin-top: 82px;
            width: 80%;
            gap: 11rem;
        }
        &__info-wrapper{
            display: flex;
            flex-direction: column;
            gap: 4.2rem; 
            flex-wrap: wrap;
        }
        &__form{
            width: 100%;
        }
        &__map{
            width: 100%;
            height: 520px;
            filter: grayscale(40%);
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
                flex-direction: column;
                align-items: center;
            }
            &__info-wrapper{
                width: 100%;
                flex-direction: row;
                justify-content: space-between;
            }
        }
    }
</style>