import styles from '../styles/Home.module.css'
import PageTitle from '../components/pagetitle'
import Image from 'next/image'

export default function About() {
  return (
    <div class="">

      <PageTitle title={"About"}/>

    <div class="grid grid-cols-3 gap-x-20">
      <div>
      <Image class="object-scale-down" src="/../public/images/sunflowers.jpg" alt="photo of me in a sunflower field" width={1536} height={2048}/>
      </div>
      <div class="col-span-2 space-y-4">
        <p class="text-xl">
        <strong>Hi, I’m Amanda (she/her)!</strong> I'm a proud Filipino American who grew up in the Hudson Valley, New York and
         spent five years studying computer science and interaction design at Northeastern University in Boston.</p>

        <p class="text-xl">I've taken on the responsibilities of a front-end developer and UI/UX designer and I 
        thrive in positions that incorporate skills from both of my disciplines. My favorite thing that design and
         code have in common is the creative process—I love seeing how the decisions made each step of the way come 
         together to support the final product.</p>

        <p class="text-xl">When it comes to my work, I enjoy improving any type of user experience, but I’m most 
        passionate about sharing and preserving culture and uplifting marginalized voices, especially through storytelling.</p>

        <p class="text-xl">I spend my time cooking and baking dishes from my favorite cuisines, ignoring my pile of unread books 
        to buy new ones, singing both parts of the duet by myself, tinkering with my mechanical keyboard, making too many Spotify
         playlists, starting more video games than I tend to finish, and getting distracted by cute dogs in public.</p>
         </div>
      </div>
    </div>
  )
}
