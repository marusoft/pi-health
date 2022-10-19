import MainSectionImageOne from '../../Assets/images/main-section-image-01.png';
import MainSectionImageTwo from '../../Assets/images/main-section-image-02.png';
import MainSectionImageThree from '../../Assets/images/main-section-image-03.png';

const constants = [
  {
    image: MainSectionImageOne,
    tag: '01',
    tagColor: 'bg-blue',
    title: 'Digital point of care tools',
    subTitle:
      'Digital point of care tools like digital oximeters, and Stethoscopes gather real time clinical insights from signal processing clinical data, thus deriving health markers.',
  },
  {
    image: MainSectionImageTwo,
    tag: '02',
    tagColor: 'bg-Piorange',
    title: 'Mobile and Web App',
    subTitle:
      'Machine learning algorithms fuses with point of care tools and wearable devices for actionable insights via the mobile and Web application during E-visits.',
  },
  {
    image: MainSectionImageThree,
    tag: '03',
    tagColor: 'bg-Pigreen',
    title: 'Wearable',
    subTitle: 'The wearable performs functions such as:',
    list: [
      'Symptom monitoring',
      'New insights into disease',
      'Precision Medicine',
      'Severity Stratification',
      'Disease Identificaton & Al assisted diagnosis',
    ],
  },
];

export default constants;
