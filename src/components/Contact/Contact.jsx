// import React from "react";

// import styles from "./Contact.module.css";
// import { getImageUrl } from "../../utils";

// export const Contact = () => {
//   return (
//     <footer id="contact" className={styles.container}>
//       <div className={styles.text}>
//         <h2>Contact</h2>
//         <p>Feel free to reach out!</p>
//       </div>
//       <ul className={styles.links}>
//         <li className={styles.link}>
//           <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
//           <a href="mailto:myemail@email.com">myemail@email.com</a>
//         </li>
//         <li className={styles.link}>
//           <img
//             src={getImageUrl("contact/linkedinIcon.png")}
//             alt="LinkedIn icon"
//           />
//           <a href="https://www.linkedin.com/myname">linkedin.com/myname</a>
//         </li>
//         <li className={styles.link}>
//           <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
//           <a href="https://www.github.com/myname">github.com/myname</a>
//         </li>
//       </ul>
//     </footer>
//   );
// };

// Contact.js

import React from "react";
import styles from "./Contact.module.css";
// import { getImageUrl } from "../../utils";
import emailIcon from "../../assets/contact/emailIcon.png";
import linkedinIcon from "../../assets/contact/linkedinIcon.png";
import githubIcon from "../../assets/contact/githubIcon.png";

const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={emailIcon} alt="Email icon" />
          <a href="mailto:pratiksingh067@gmail.com">pratiksingh067@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img src={linkedinIcon} alt="LinkedIn icon" />
          <a href="https://www.linkedin.com/in/pratik-singh-tomar/">
            linkedin.com/in/pratik-singh-tomar
          </a>
        </li>
        <li className={styles.link}>
          <img src={githubIcon} alt="Github icon" />
          <a href="https://github.com/PratikTomar">github.com/PratikTomar</a>
        </li>
      </ul>
    </footer>
  );
};

export default Contact;
