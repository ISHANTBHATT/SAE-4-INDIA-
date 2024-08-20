"use client";
import { FiBarChart, FiBell, FiDollarSign, FiPlay } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";
import { useWindowSize } from "../hooks/useWindowSize";
import { useState } from "react";

const VerticalAccordion = () => {
  const [open, setOpen] = useState(items[0].id);

  return (
    <section
      className="p-4 bg-[#0a0a0a] py-40"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke-width='2' stroke='%2318181b'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e")`,
      }}
    >
      <div className="flex flex-col lg:flex-row h-fit lg:h-[450px] w-full max-w-6xl mx-auto shadow overflow-hidden">
        {items.map((item) => {
          return (
            <Panel
              key={item.id}
              open={open}
              setOpen={setOpen}
              id={item.id}
              Icon={item.Icon}
              title={item.title}
              imgSrc={item.imgSrc}
              description={item.description}
            />
          );
        })}
      </div>
    </section>
  );
};

const Panel = ({ open, setOpen, id, Icon, title, imgSrc, description }) => {
  const { width } = useWindowSize();
  const isOpen = open === id;

  return (
    <>
      <button
        className="bg-white hover:bg-slate-50 transition-colors p-3 border-r-[1px] border-b-[1px] border-slate-200 flex flex-row-reverse lg:flex-col justify-end items-center gap-4 relative group"
        onClick={() => setOpen(id)}
      >
        <span
          style={{
            writingMode: "vertical-lr",
          }}
          className="hidden lg:block text-xl font-light rotate-180"
        >
          {title}
        </span>
        <span className="block lg:hidden text-xl font-light">{title}</span>
        <div className="w-6 lg:w-full aspect-square bg-white grid place-items-center">
          {/* <Icon /> */}
          <img src={Icon} className="w-6" />
        </div>
        <span className="w-4 h-4 bg-white group-hover:bg-slate-50 transition-colors border-r-[1px] border-b-[1px] lg:border-b-0 lg:border-t-[1px] border-slate-200 rotate-45 absolute bottom-0 lg:bottom-[50%] right-[50%] lg:right-0 translate-y-[50%] translate-x-[50%] z-[1]" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key={`panel-${id}`}
            variants={width && width > 1024 ? panelVariants : panelVariantsSm}
            initial="closed"
            animate="open"
            exit="closed"
            style={{
              backgroundImage: `url(${imgSrc})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
            className="w-full h-full overflow-hidden relative bg-black flex flex-col-reverse "
          >
            <motion.div
              variants={descriptionVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="px-4 py-2 bg-black/40 backdrop-blur-sm text-white whitespace-pre-wrap overflow-y-auto text-justify"
            >
              <p>{description}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default VerticalAccordion;

const panelVariants = {
  open: {
    width: "100%",
    height: "100%",
  },
  closed: {
    width: "0%",
    height: "100%",
  },
};

const panelVariantsSm = {
  open: {
    width: "100%",
    height: "200px",
  },
  closed: {
    width: "100%",
    height: "0px",
  },
};

const descriptionVariants = {
  open: {
    opacity: 1,
    y: "0%",
    transition: {
      delay: 0.125,
    },
  },
  closed: { opacity: 0, y: "100%" },
};

const items = [
  {
    id: 1,
    title: "Sports education program ",
    Icon: "../sports_education_icon.png",
    imgSrc: "../Sports_education_program.jpg",
    description: `India's sports landscape is rich and diverse, offering coaching in various sports ranging from traditional games to globally recognized ones. A professional team dedicated to sports and education plays a pivotal role in providing top-tier coaching services across multiple disciplines. Here's an overview of some of the sports included in their coaching portfolio: 
     1. Tennis 
     2. Badminton 
     3. Football 
     4. Basketball 
     5.Kayaking and Canoeing 
     6. Dragon Boat Racing 
     7. Judo 
     8. Taekwondo 
     9. Kabaddi 
     10. Squash 
     11. Chess 
     12. Swimming `,
  },
  {
    id: 2,
    title: "Professional Coaching Services",
    Icon: "../coaching_icon.png",
    imgSrc: "../Professional_Coaching_Services.jpg",
    description: `The professional team of SAE 4 INDIA dedicated to sports and education offers comprehensive coaching services that go beyond mere physical training. They integrate sports education with academic development, ensuring athletes receive a well-rounded experience. This approach not only fosters athletic excellence but also emphasizes the importance of education in an athlete’s life.
Coaching programs are designed to:
    • Develop Technical Skills: Through systematic training and expert guidance.
    • Promote Physical Fitness: With conditioning programs tailored to each sport.
    • Enhance Mental Toughness: By teaching athletes how to handle pressure and stay focused.
    • Encourage Teamwork and Leadership: Essential qualities for success in both sports and life.
    • Integrate Sports with Education: Ensuring athletes do not compromise on their academic goals.
`,
  },
  {
    id: 3,
    title: "Fusion Spexun",
    Icon: "../Tour_icon.png",
    imgSrc: "../Fusion_Spexun.jpg",
    description: `FUSION SPEXUN: A Comprehensive Program for Aspiring Athletes and Scholars. FUSION SPEXUN is a uniquely designed program that blends world-class sports training with enriching cultural experiences and academic exploration. It offers a holistic approach to developing not only athletic skills but also a broader understanding of the world and one’s future academic path.

Key Elements of FUSION SPEXUN:

	1. International Sports Training Camps:
	   - Global Partnerships: Athletes have the chance to train in premier sports facilities located in Bulgaria, Italy, 
          Switzerland, the UK, the Czech Republic, and Poland.
	   - Elite Coaching: The program ensures access to top-notch coaches and training regimens, helping athletes 
          enhance their skills and prepare for high-level competition.
	   - International Exposure: Participants engage with peers from around the world, gaining valuable experience in 
          different playing environments and cultural contexts.

	2. Cultural and Excursion Tour:
	   - Cultural Immersion: The program includes carefully planned excursions that allow participants to experience the 
          rich cultural heritage, traditions, and natural beauty of the countries they visit.
	   - Broader Perspectives: These tours aim to expand the participants' worldviews, fostering a deeper appreciation 
          of global diversity and promoting personal growth.

	3. University Visits and Interactive Programs:
	   - Academic Exploration: Athletes visit prestigious universities in each country, where they can explore various 
          academic programs and fields of study.
	   - Interactive Engagement: The program includes interactive sessions such as workshops, campus tours, and 
          discussions with university faculty, providing insights into potential academic pursuits.
	   - Future Planning: These visits are designed to help athletes make informed decisions about their future 
          education, aligning their academic interests with their career goals.
	
FUSION SPEXUN is more than just a sports training program; it is a comprehensive experience that prepares participants for success both on and off the field, equipping them with the skills, knowledge, and cultural understanding needed to thrive in a globalized world.
`,
  },
  // {
  //   id: 4,
  //   title: "Grow faster",
  //   Icon: FiBarChart,
  //   imgSrc:
  //     "https://images.unsplash.com/photo-1543286386-713bdd548da4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
  //   description:
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum eius deserunt quia consectetur aliquid obcaecati voluptatibus quos distinctio natus! Tenetur.",
  // },
];
