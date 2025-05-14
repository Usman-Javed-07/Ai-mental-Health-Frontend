import styles from '../components/css/About.module.css';
export const About = () => {
    return (
        <div className={styles.container}>
        <div className={styles.heroSection}>
          <h1 className={styles.heading}>Welcome to MindCare</h1>
          <p className={styles.tagline}>
            Revolutionizing Mental Health Support with AI Technology
          </p>
        </div>
  
        <div className={styles.contentSection}>
          <div className={styles.sectionWrapper}>
            <h2 className={styles.sectionHeading}>Our Mission</h2>
            <p className={styles.text}>
              At <strong>MindCare</strong>, our mission is to provide an easily accessible and empathetic 
              platform for mental health support. We believe in breaking barriers to mental wellness by 
              leveraging cutting-edge AI technologies to help users manage stress, anxiety, and other 
              mental health challenges in a secure and confidential environment.
            </p>
          </div>
  
          <div className={styles.sectionWrapper}>
            <h2 className={styles.sectionHeading}>What We Offer</h2>
            <p className={styles.text}>
              MindCare is designed to be your trusted companion for mental health support. Our platform 
              offers:
            </p>
            <ul className={styles.list}>
              <li>Real-time, AI-driven conversations tailored to your needs.</li>
              <li>Personalized resources, including mindfulness exercises and self-help articles.</li>
              <li>Secure and private user authentication to protect your data.</li>
              <li>An intuitive and user-friendly interface for seamless interaction.</li>
            </ul>
          </div>
  
          <div className={styles.sectionWrapper}>
            <h2 className={styles.sectionHeading}>How It Works</h2>
            <p className={styles.text}>
              MindCare utilizes advanced technologies like <strong>OpenAI GPT</strong> to create empathetic, meaningful interactions. Whether you are looking for 
              stress management techniques, initial mental health guidance, or simply a safe space to talk, 
              our platform is here to assist you.
            </p>
          </div>
  
          <div className={styles.sectionWrapper}>
            <h2 className={styles.sectionHeading}>Why Choose MindCare?</h2>
            <p className={styles.text}>
              Mental health is a critical aspect of overall well-being, and we aim to make support more 
              accessible and stigma-free. MindCare is not a replacement for professional therapy, but it 
              serves as a stepping stone, offering users a safe, private space to express themselves and 
              gain valuable insights into their mental health journey.
            </p>
          </div>
  
          <div className={styles.sectionWrapper}>
            <h2 className={styles.sectionHeading}>Join Us</h2>
            <p className={styles.text}>
              Embark on a journey to better mental health with <strong>MindCare</strong>. Let us assist you in 
              navigating life’s challenges with empathy, understanding, and cutting-edge technology. Together, 
              we can make mental health support accessible for everyone.
            </p>
          </div>
        </div>
      </div>
    )
}

export default About
