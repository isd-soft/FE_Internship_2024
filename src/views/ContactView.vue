<script setup>
    import Advantages from "@/components/Advantages.vue"
    import ImageNavCard from "@/components/ImageNavCard.vue"
    import ContactInfoCard from "@/components/ContactInfoCard.vue"
</script>

<template>
    <div>
        <ImageNavCard navName="Contact"/>
        <div class="contact">
            <div class="contact__text">
                <h3>Get In Touch With Us</h3>
                <p>For More Information About Our Product & Services. Please Feel Free To Drop Us <br>
                    An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
            </div>
            <div class="contact__session">
                <div class="contact__info">
                    <ContactInfoCard/>
                    <ContactInfoCard/>
                    <ContactInfoCard/>
                </div>
                <form action="">
                    <div>
                        <label for="name">Your name</label>
                        <input type="text" placeholder="ABC">
                    </div>
                    <div>
                        <label for="email">Email address</label>
                        <input type="email" placeholder="abs@def.com">
                    </div>
                    <div>
                        <label for="subject">Subject</label>
                        <input type="text" placeholder="This is an optional">
                    </div>
                    <div>
                        <label for="message">Message</label>
                        <input type="text" placeholder="Hi! i’d like to ask about">
                    </div>
                    <button type="submit">Submit</button>
                </form>
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
                font-size: 2.25rem;
                line-height: 2.5rem;
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
            form{
                display: flex;
                gap: 1.5rem;
                flex-direction: column;
                div{
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                }
            }
        }
        &__info{
            display: flex;
            flex-direction: column;
            gap: 42px;

        }
    }
</style>