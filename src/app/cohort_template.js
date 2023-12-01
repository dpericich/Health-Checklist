const healthData = {
  female_40_59: {
    age: '40-59',
    sex: 'Female',
    summary: {
      description:
        "Women lose .5% bone density/yr starting in mid 30s. By post menopause up to 1.5% for average women, 3-5%/yr for those more prone to this issue. Most women begin to experience unintentional weight gain and loss of lean muscle mass. They may feel testy and short, tired and annoyed. They find it difficult to get a good night's sleep.",
      keyPoints: [
        'Bone density starts to decrease .5%/.per year.',
        'Unintentional weight gain and lean muscle loss.',
        'Hormonal imbalances may negatively affect mood and sleep.',
      ],
    },
    healthMarkers: [
      {
        type: 'cardiovascular',
        markers: [
          {
            name: 'bloodPressureAvg',
            value: '124/75',
            tooltip: '',
            type: 'cardiovascular',
            comment:
              'Blood pressure numbers of less than 120/80 mm Hg (millimeters of mercury) are considered within the normal range. If your results fall into this category, stick with heart-healthy habits like following a balanced diet and getting regular exercise.',
          },
          {
            name: 'bloodPressureRange',
            value: '124/75',
            tooltip: '',
            type: 'cardiovascular',
            comment:
              'Ideal blood pressure is considered to be between 90/60mmHg and 120/80mmHg. high blood pressure is considered to be 140/90mmHg or higher. low blood pressure is considered to be below 90/60mmHg.',
          },
          {
            name: 'restingHeartRate',
            value: '124/75',
            tooltip: '',
            type: 'cardiovascular',
            comment:
              "A normal resting heart rate should be between 60 to 100 beats per minute, but it can vary from minute to minute. Your age and general health can also affect your pulse rate, so it's important to remember that a 'normal' pulse can vary from person to person.",
          },
          {
            name: 'heartRateVariability',
            value: '124/75',
            tooltip: '',
            type: 'cardiovascular',
            comment:
              'Heart rate variability is where the amount of time between your heartbeats fluctuates slightly. These variations are very small, adding or subtracting a fraction of a second between beats.',
          },
        ],
      },
      {
        type: 'physical',
        markers: [
          {
            name: 'bodyMassIndexRange',
            value: '24-36',
            tooltip: '',
            type: 'physical',
            comment:
              'If your BMI is less than 18.5, it falls within the underweight range. If your BMI is 18.5 to 24.9, it falls within the Healthy Weight range. If your BMI is 25.0 to 29.9, it falls within the overweight range. If your BMI is 30.0 or higher, it falls within the obese range.',
          },
          {
            name: 'bodyMassIndexAvg',
            value: '29',
            tooltip: 'tooltip explaining what this is & limitiations',
            type: 'physical',
            comment:
              'The body mass index (BMI) is a measure that uses your height and weight to work out if your weight is healthy. For most adults, an ideal BMI is in the 18.5 to 24.9 range. For children and young people aged 2 to 18, the BMI calculation takes into account age and gender as well as height and weight.',
          },
          {
            name: 'activeMinutesWeek',
            value: '150',
            tooltip: 'minutes per week',
            type: 'physical',
            comment:
              'Get at least 150 minutes per week of moderate-intensity aerobic activity or 75 minutes per week of vigorous aerobic activity, or a combination of both, preferably spread throughout the week.',
          },
          {
            name: 'strengthTraining',
            value: '2',
            tooltip: 'sessions per week',
            type: 'physical',
            comment:
              'The ideal breakdown of cardio and strength work varies depending on your specific goals, but in general, four to five days a week of exercise will do the trick if you’re aiming to improve or maintain your fitness.',
          },
          {
            name: 'averageMileRange',
            value: '12:00 - 14:00',
            tooltip: 'minutes',
            type: 'physical',
            comment:
              'The one-mile endurance run or walk test is a commonly used walk/run test of aerobic endurance. ',
          },
          {
            name: 'averageMileTime',
            value: '13:00',
            tooltip: 'minutes',
            type: 'physical',
            comment:
              'The one-mile endurance run or walk test is a commonly used walk/run test of aerobic endurance. ',
          },
          {
            name: 'averageKiloRange',
            value: '7:00 - 8:30',
            tooltip: 'minutes',
            type: 'physical',
            comment:
              'The one-kilo endurance run or walk test is a commonly used walk/run test of aerobic endurance. ',
          },
          {
            name: 'averageKiloTime',
            value: '7:45',
            tooltip: 'minutes',
            type: 'physical',
            comment:
              'The one-kilo endurance run or walk test is a commonly used walk/run test of aerobic endurance. ',
          },
          {
            name: 'pushUps',
            value: '7-14',
            tooltip: 'bent knee',
            type: 'physical',
            comment:
              "Push-ups are an equipment-free resistance exercise that can help you build muscle strength. And they're not just for serious gym-goers. Whether you do traditional push-ups or a modified version, you'll enjoy research-proven health benefits. ",
          },
          {
            name: 'pushUpsAvg',
            value: '10',
            tooltip: 'total reps',
            type: 'physical',
            comment:
              "Push-ups are an equipment-free resistance exercise that can help you build muscle strength. And they're not just for serious gym-goers. Whether you do traditional push-ups or a modified version, you'll enjoy research-proven health benefits. ",
          },
        ],
      },
      {
        type: 'flexibility',
        markers: [
          {
            name: 'squatRepTest',
            average: '15-17 reps',
            aboveAverage: '18-20 reps',
            excellent: '>23 reps',
            type: 'flexibility',
            comment:
              'Squats burn calories and might help you lose weight. They also lower your chances of injuring your knees and ankles. As you exercise, the movement strengthens your tendons, bones, and ligaments around the leg muscles.',
          },
          {
            name: 'sitAndReach',
            average: '17.5 in',
            aboveAverage: '19.0 in',
            excellent: '20.5 in',
            type: 'flexibility',
            comment:
              'Hamstring flexibility is highly desirable in most sports involving running and is an integral part of activities such as dancing, gymnastics and martial arts.The desire for hamstring flexibility in running sports is primarily aimed at reducing muscle tears or strains and improving running efficiency, agility and speed.',
          },
        ],
      },
    ],
    appointments: {
      doctorCheckups: [
        'Annual PCP Appointment',
        'Blood Pressure Screening',
        'Cholesterol Screening',
        'Diabetes Screening',
        'Breast Cancer Screening',
        'Cervical Cancer Screening',
        'Colorectal Cancer Screening',
        'Eye Exam',
      ],
      dentalCheckups: ['Annual Dental Appointment'],
    },
    degradation: [
      {
        name: 'Key Lookouts',
        text: 'The most impactful diseases to lookout for are depression, cardiovascular disease. These are associated with a 2x chance of significantly decreased health. The worst behavior for risk of poor health outcomes is smoking at your age.\n\n In short, lookout for:',
        bulletPoints: ['Cardiovascular health', 'Depression', 'Smoking'],
      },
      {
        name: 'Longevity info',
        text: "Bone density and breast cancer carry your greatist risk for deteriorating your quality of life or increasing mortatlity rate. Make sure you're lifting weights and getting mammograms at regular intervals over these two decades.\n\n Most people by 50 cannot twist at all. Make sure you are doing what you can to train your ability to twist. Balance is also very important at your age, as your greatest risk for poor health outcomes from accidents come from falling once you get past your 50s.\n\n In short, lookout for:",
        bulletPoints: [
          'Bone Density',
          'Breast Cancer',
          'Twist Flexibility',
          'Balance',
        ],
      },
    ],
  },
}

export const quotes = {
  0: 'Blood pressure numbers of less than 120/80 mm Hg (millimeters of mercury) are considered within the normal range. If your results fall into this category, stick with heart-healthy habits like following a balanced diet and getting regular exercise.',

  1: 'Ideal blood pressure is considered to be between 90/60mmHg and 120/80mmHg. high blood pressure is considered to be 140/90mmHg or higher. low blood pressure is considered to be below 90/60mmHg.',

  2: 'The one-mile endurance run or walk test is a commonly used walk/run test of aerobic endurance. ',

  3: 'The one-kilo endurance run or walk test is a commonly used walk/run test of aerobic endurance. ',

  4: "Push-ups are an equipment-free resistance exercise that can help you build muscle strength. And they're not just for serious gym-goers. Whether you do traditional push-ups or a modified version, you'll enjoy research-proven health benefits. ",

  5: 'Squats burn calories and might help you lose weight. They also lower your chances of injuring your knees and ankles. As you exercise, the movement strengthens your tendons, bones, and ligaments around the leg muscles.',

  6: 'Hamstring flexibility is highly desirable in most sports involving running and is an integral part of activities such as dancing, gymnastics and martial arts.The desire for hamstring flexibility in running sports is primarily aimed at reducing muscle tears or strains and improving running efficiency, agility and speed.',
}

export default healthData
