const healthData = {
  female_20_39: {
    age: '20-39',
    sex: 'Female',
    summary: {
      description:
        "When you’re in your 20s, you likely look (and feel) young and strong, bursting at the seams with energy and sex drive. However, it’s important to take some preventative steps. These include regular exercise, protecting your skin from UV rays, maintaining a healthy weight, avoiding excess alcohol, and saying no to smoking. Women lose .5% bone density/yr starting in mid 30s. By post menopause up to 1.5% for average women, 3-5%/yr for those more prone to this issue. Most women begin to experience unintentional weight gain and loss of lean muscle mass. They may feel testy and short, tired and annoyed. They find it difficult to get a good night's sleep.",
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
            name: 'Blood Pressure',
            average: '124/75',
            range: [],
            units: '',
            tooltip: '',
            type: 'cardiovascular',
            notes: [
              "A normal resting heart rate should be between 60 to 100 beats per minute, but it can vary from minute to minute. Your age and general health can also affect your pulse rate, so it's important to remember that a 'normal' pulse can vary from person to person.",
            ],
          },
          {
            name: 'Resting Heart Rate',
            average: '124/75',
            range: '',
            units: 'Beats per minute',
            tooltip: '',
            type: 'cardiovascular',
            notes: [
              {
                title: 'Test',
                content:
                  "A normal resting heart rate should be between 60 to 100 beats per minute, but it can vary from minute to minute. Your age and general health can also affect your pulse rate, so it's important to remember that a 'normal' pulse can vary from person to person.",
              },
            ],
          },
          {
            name: 'Heart Rate Variability',
            average: '124/75',
            range: '',
            units: '',
            tooltip: '',
            type: 'cardiovascular',
            notes: [
              {
                title: 'Test',
                content:
                  'Heart rate variability is where the amount of time between your heartbeats fluctuates slightly. These variations are very small, adding or subtracting a fraction of a second between beats.',
              },
            ],
          },
        ],
      },
      {
        type: 'physical',
        markers: [
          {
            name: 'BMI',
            average: '29',
            aboveAverage: '27',
            superior: '24',
            units: 'Score',
            tooltip: '',
            type: 'physical',
            notes: [
              {
                title: 'Test',
                content:
                  'If your BMI is less than 18.5, it falls within the underweight range. If your BMI is 18.5 to 24.9, it falls within the Healthy Weight range. If your BMI is 25.0 to 29.9, it falls within the overweight range. If your BMI is 30.0 or higher, it falls within the obese range. The body mass index (BMI) is a measure that uses your height and weight to work out if your weight is healthy. For most adults, an ideal BMI is in the 18.5 to 24.9 range. For children and young people aged 2 to 18, the BMI calculation takes into account age and gender as well as height and weight.',
              },
            ],
          },
          {
            name: 'Active Minutes Per Week',
            average: '150',
            units: 'Minutes per week',
            tooltip: 'minutes per week',
            type: 'physical',
            notes: [
              {
                title: 'Test',
                content:
                  'Get at least 150 minutes per week of moderate-intensity aerobic activity or 75 minutes per week of vigorous aerobic activity, or a combination of both, preferably spread throughout the week.',
              },
            ],
          },
          {
            name: 'Strength Training',
            average: '2',
            units: 'Sessions per week',
            tooltip: 'sessions per week',
            type: 'physical',
            notes: [
              {
                title: 'Test',
                content:
                  'The ideal breakdown of cardio and strength work varies depending on your specific goals, but in general, four to five days a week of exercise will do the trick if you’re aiming to improve or maintain your fitness.',
              },
            ],
          },
          {
            name: 'Mile Time',
            average: '12',
            aboveAverage: '10',
            superior: '8',
            units: 'Minutes',
            tooltip: 'minutes',
            type: 'physical',
            kilo_range: '7:00 - 8:30',
            kilo_avg: '7:45',
            notes: [
              {
                title: 'Test',
                content:
                  'The one-mile endurance run or walk test is a commonly used walk/run test of aerobic endurance. ',
              },
            ],
          },
          {
            name: 'Push Ups',
            average: '7',
            aboveAverage: '10',
            superior: '14',
            units: 'Reps',
            tooltip: 'bent knee',
            type: 'physical',
            notes: [
              {
                title: 'Test',
                content:
                  "Push-ups are an equipment-free resistance exercise that can help you build muscle strength. And they're not just for serious gym-goers. Whether you do traditional push-ups or a modified version, you'll enjoy research-proven health benefits. ",
              },
            ],
          },
        ],
      },
      {
        type: 'flexibility',
        markers: [
          {
            name: 'Squat Rep Test',
            average: '22',
            units: 'Reps',
            aboveAverage: '25',
            superior: '29',
            type: 'flexibility',
            notes: [
              {
                title: 'Why?',
                content:
                  'Squats burn calories and might help you lose weight. They also lower your chances of injuring your knees and ankles. As you exercise, the movement strengthens your tendons, bones, and ligaments around the leg muscles.',
              },
              {
                title: 'Test',
                content:
                  "Stand in front of a chair or bench with your feet at shoulder's width apart, facing away from it. Place your hands on your hips. Squat down and lightly touch the chair before standing back up. A good sized chair is one that makes your knees at right angles when you are sitting. Keep doing this until you're fatigued.",
              },
            ],
            videoThumb: 'squatTest.png',
            videoURL: 'https://www.youtube.com/watch?v=nVsWUtN7NXI',
          },
          {
            name: 'Sit and Reach',
            average: '21',
            units: 'Inches',
            aboveAverage: '25',
            superior: '29',
            type: 'flexibility',
            notes: [
              {
                title: 'Why?',
                content:
                  'Hamstring flexibility is highly desirable in most sports involving running and is an integral part of activities such as dancing, gymnastics and martial arts.The desire for hamstring flexibility in running sports is primarily aimed at reducing muscle tears or strains and improving running efficiency, agility and speed.',
              },
              {
                title: 'Test',
                content:
                  'Sit on the floor with legs stretched out straight ahead. The soles of the feet are placed flat against the box. Both knees should be locked and pressed flat to the floor. With the palms facing downwards, and the hands on top of each other or side by side, the subject reaches forward along the measuring line as far as possible. Reach out and hold that position for at least one-two seconds while the distance is recorded.',
              },
            ],

            videoThumb: 'sitReachTest.png',
            videoURL: 'https://www.youtube.com/watch?v=S-UWdErmXuk',
          },
          {
            name: 'Shoulder Flexibility',
            average: '3',
            units: 'Inches',
            aboveAverage: '1.5',
            superior: '1',
            type: 'flexibility',
            notes: [
              {
                title: 'Why?',
                content:
                  'Shoulder overhead mobility is an essential human movement that you should strive to always possess! Its a very valuable asset, especially for overhead athletes considering a reduced total range of motion at the shoulder joint has been identified as a risk factor for shoulder injury (1).',
              },
              {
                title: 'Test',
                content:
                  'In a standing position, place one hand behind the head and back over the shoulder, and reach as far as possible down the middle of your back. Place the other arm behind your back, palm facing outward and fingers upward. Reach up as far as possible attempting to touch both hands. An assistant is required to direct the subject so that the fingers are aligned, and to measure the distance between the tips of the middle fingers.',
              },
            ],

            videoThumb: 'shoulderTest.png',
            videoURL: 'https://www.youtube.com/watch?v=usmIvGlCzNk',
          },
        ],
      },
    ],
    appointments: {
      doctorCheckups: [
        {
          name: 'Annual PCP Appointment',
          link: 'https://health.clevelandclinic.org/why-you-need-an-annual-physical-and-what-to-expect',
        },
        {
          name: 'Blood Pressure Screening',
          link: 'https://www.mayoclinic.org/tests-procedures/blood-pressure-test/about/pac-20393098',
        },
        {
          name: 'Cholesterol Screening',
          link: 'https://www.cdc.gov/cholesterol/cholesterol_screening.htm',
        },
        {
          name: 'Diabetes Screening',
          link: 'https://www.cdc.gov/diabetes/basics/getting-tested.html',
        },
        {
          name: 'Breast Cancer Screening',
          link: 'https://www.cdc.gov/cancer/breast/basic_info/screening.htm',
        },
        {
          name: 'Cervical Cancer Screening',
          link: 'https://www.cdc.gov/cancer/cervical/basic_info/screening.htm',
        },
        {
          name: 'Colorectal Cancer Screening',
          link: 'https://www.cdc.gov/cancer/colorectal/basic_info/screening/tests.htm',
        },
        {
          name: 'Eye Exam',
          link: 'https://www.aao.org/eye-health/tips-prevention/eye-exams-101',
        },
      ],
      dentalCheckups: [
        {
          name: 'Annual Dental Appointment',
          link: 'https://my.clevelandclinic.org/health/treatments/11187-dental-check-up',
        },
      ],
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
  female_40_59: {
    age: '40-59',
    sex: 'Female',
    summary: {
      description:
        'Your 40s are a time you’ll likely continue the trend of lean tissue loss and increases in body fat, especially around your midsection. Fertility in women decreases as well, and at age 40 women have just a 5 percent chance of getting pregnant each month, according to the American Society for Reproductive Medicine. Women in their late 40s may begin the process of menopause, and should be screened for breast cancer using mammograms beginning at age 40, suggests MedlinePlus. A woman’s risk for osteoporosis increases, as bone density tends to decrease with age (especially in women). You may begin to notice (if you haven’t already) hair loss, gray hairs, and wrinkly or sagging skin in your 40s.',
      keyPoints: [
        'Bone density starts to decrease .5%/.per year or more.',
        "Prioritize a fitness routine with weights and cardio if you haven't.",
        'Hormonal imbalances may negatively affect mood and sleep due to menopause.',
      ],
    },
    healthMarkers: [
      {
        type: 'cardiovascular',
        markers: [
          {
            name: 'Blood Pressure',
            average: '124/75',
            range: '106/64 - 142/86',
            units: '',
            tooltip:
              'systolic (when the heart beats)/dialstolic (when the heart rests)',
            type: 'cardiovascular',
            notes: [
              {
                title: 'Why?',
                content:
                  'Blood pressure numbers of less than 120/80 mm Hg (millimeters of mercury) are considered within the normal range. If your results fall into this category, stick with heart-healthy habits like following a balanced diet and getting regular exercise. Ideal blood pressure is considered to be between 90/60mmHg and 120/80mmHg. high blood pressure is considered to be 140/90mmHg or higher. low blood pressure is considered to be below 90/60mmHg.',
              },
            ],
          },
          {
            name: 'Resting Heart Rate',
            average: '75',
            range: '64-85',
            units: 'Beats per minute',
            tooltip: 'Generally, the lower the more health you on this metric',
            type: 'cardiovascular',
            notes: [
              {
                title: 'Why?',
                content:
                  "A normal resting heart rate should be between 60 to 100 beats per minute, but it can vary from minute to minute. Your age and general health can also affect your pulse rate, so it's important to remember that a 'normal' pulse can vary from person to person.",
              },
            ],
          },
          {
            name: 'Heart Rate Variability',
            average: '55',
            range: '49-71',
            units: '',
            units: '',
            tooltip:
              'The higher the better, it signifies a more adaptive nervous system and more time in a physically relaxed state.',
            type: 'cardiovascular',
            notes: [
              {
                title: 'Why?',
                content:
                  'Heart rate variability is where the amount of time between your heartbeats fluctuates slightly. These variations are very small, adding or subtracting a fraction of a second between beats.',
              },
            ],
          },
        ],
      },
      {
        type: 'physical',
        markers: [
          {
            name: 'BMI',
            average: '29',
            aboveAverage: '27',
            superior: '24',
            units: 'Score',
            tooltip: '',
            type: 'physical',
            notes: [
              {
                title: 'Why?',
                content:
                  'If your BMI is less than 18.5, it falls within the underweight range. If your BMI is 18.5 to 24.9, it falls within the Healthy Weight range. If your BMI is 25.0 to 29.9, it falls within the overweight range. If your BMI is 30.0 or higher, it falls within the obese range. The body mass index (BMI) is a measure that uses your height and weight to work out if your weight is healthy. For most adults, an ideal BMI is in the 18.5 to 24.9 range. For children and young people aged 2 to 18, the BMI calculation takes into account age and gender as well as height and weight.',
              },
            ],
          },
          {
            name: 'Active Minutes Per Week',
            average: '150',
            units: 'Minutes per week',
            tooltip: 'minutes per week',
            type: 'physical',
            notes: [
              {
                title: 'Why?',
                content:
                  'Get at least 150 minutes per week of moderate-intensity aerobic activity or 75 minutes per week of vigorous aerobic activity, or a combination of both, preferably spread throughout the week.',
              },
            ],
          },
          {
            name: 'Strength Training',
            average: '2',
            units: 'Sessions per week',
            tooltip: 'sessions per week',
            type: 'physical',
            notes: [
              {
                title: 'Why?',
                content:
                  'The ideal breakdown of cardio and strength work varies depending on your specific goals, but in general, four to five days a week of exercise will do the trick if you’re aiming to improve or maintain your fitness.',
              },
            ],
          },
          {
            name: 'Mile Time',
            average: '13',
            aboveAverage: '11',
            superior: '9',
            units: 'Minutes',
            tooltip: 'minutes',
            type: 'physical',
            kilo_range: '7:00 - 8:30',
            kilo_avg: '7:45',
            notes: [
              {
                title: 'Why?',
                content:
                  'The one-mile endurance run or walk test is a commonly used walk/run test of aerobic endurance. ',
              },
            ],
          },
          {
            name: 'Push Ups',
            average: '6',
            aboveAverage: '9',
            superior: '10',
            units: 'Reps',
            tooltip: 'bent knee',
            type: 'physical',
            notes: [
              {
                title: 'Why?',
                content:
                  "Push-ups are an equipment-free resistance exercise that can help you build muscle strength. And they're not just for serious gym-goers. Whether you do traditional push-ups or a modified version, you'll enjoy research-proven health benefits. ",
              },
            ],
          },
        ],
      },
      {
        type: 'flexibility',
        markers: [
          {
            name: 'Squat Rep Test',
            average: '15',
            units: 'Reps',
            aboveAverage: '19',
            superior: '23',
            type: 'flexibility',
            notes: [
              {
                title: 'Why?',
                content:
                  'Squats burn calories and might help you lose weight. They also lower your chances of injuring your knees and ankles. As you exercise, the movement strengthens your tendons, bones, and ligaments around the leg muscles.',
              },
              {
                title: 'Test',
                content:
                  "Stand in front of a chair or bench with your feet at shoulder's width apart, facing away from it. Place your hands on your hips. Squat down and lightly touch the chair before standing back up. A good sized chair is one that makes your knees at right angles when you are sitting. Keep doing this until you're fatigued.",
              },
            ],
            videoThumb: 'squatTest.png',
            videoURL: 'https://www.youtube.com/watch?v=nVsWUtN7NXI',
          },
          {
            name: 'Sit and Reach',
            average: '17.5',
            units: 'Inches',
            aboveAverage: '19',
            superior: '20',
            type: 'flexibility',
            notes: [
              {
                title: 'Why?',
                content:
                  'Hamstring flexibility is highly desirable in most sports involving running and is an integral part of activities such as dancing, gymnastics and martial arts.The desire for hamstring flexibility in running sports is primarily aimed at reducing muscle tears or strains and improving running efficiency, agility and speed.',
              },
              {
                title: 'Test',
                content:
                  'Sit on the floor with legs stretched out straight ahead. The soles of the feet are placed flat against the box. Both knees should be locked and pressed flat to the floor. With the palms facing downwards, and the hands on top of each other or side by side, the subject reaches forward along the measuring line as far as possible. Reach out and hold that position for at least one-two seconds while the distance is recorded.',
              },
            ],
            videoThumb: 'sitReachTest.png',
            videoURL: 'https://www.youtube.com/watch?v=S-UWdErmXuk',
          },
          {
            name: 'Shoulder Flexibility',
            average: '5',
            aboveAverage: '3',
            units: 'Inches',
            superior: '1',
            type: 'flexibility',

            notes: [
              {
                title: 'Why?',
                content:
                  'Shoulder overhead mobility is an essential human movement that you should strive to always possess! Its a very valuable asset, especially for overhead athletes considering a reduced total range of motion at the shoulder joint has been identified as a risk factor for shoulder injury (1).',
              },
              {
                title: 'Test',
                content:
                  'In a standing position, place one hand behind the head and back over the shoulder, and reach as far as possible down the middle of your back. Place the other arm behind your back, palm facing outward and fingers upward. Reach up as far as possible attempting to touch both hands. An assistant is required to direct the subject so that the fingers are aligned, and to measure the distance between the tips of the middle fingers.',
              },
            ],
            videoThumb: 'shoulderTest.png',
            videoURL: 'https://www.youtube.com/watch?v=usmIvGlCzNk',
          },
        ],
      },
    ],
    appointments: {
      doctorCheckups: [
        {
          name: 'Annual PCP Appointment',
          link: 'https://health.clevelandclinic.org/why-you-need-an-annual-physical-and-what-to-expect',
        },
        {
          name: 'Blood Pressure Screening',
          link: 'https://www.mayoclinic.org/tests-procedures/blood-pressure-test/about/pac-20393098',
        },
        {
          name: 'Cholesterol Screening',
          link: 'https://www.cdc.gov/cholesterol/cholesterol_screening.htm',
        },
        {
          name: 'Diabetes Screening',
          link: 'https://www.cdc.gov/diabetes/basics/getting-tested.html',
        },
        {
          name: 'Breast Cancer Screening',
          link: 'https://www.cdc.gov/cancer/breast/basic_info/screening.htm',
        },
        {
          name: 'Cervical Cancer Screening',
          link: 'https://www.cdc.gov/cancer/cervical/basic_info/screening.htm',
        },
        {
          name: 'Colorectal Cancer Screening',
          link: 'https://www.cdc.gov/cancer/colorectal/basic_info/screening/tests.htm',
        },
        {
          name: 'Eye Exam',
          link: 'https://www.aao.org/eye-health/tips-prevention/eye-exams-101',
        },
      ],
      dentalCheckups: [
        {
          name: 'Annual Dental Appointment',
          link: 'https://my.clevelandclinic.org/health/treatments/11187-dental-check-up',
        },
      ],
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
  female_60_79: {
    age: '60-79',
    sex: 'Female',
    summary: {
      description:
        'The 60s are golden years for many adults — working less, grandparenting, and enjoying life. Women generally gain weight until age 65; then slowly shed pounds due to muscle losses. Poor eyesight and hearing loss may become concerns. Chronic disease risks (like heart disease, cancer, diabetes, and osteoporosis) and lean muscle loss are still on your radar at age 60. You may begin to notice arthritis, stiff joints, and increased fatigue. You’ll generally experience height loss at a more rapid rate beginning in your 70s, says MedlinePlus. Furthermore, dental problems, dementia (forgetfulness), falls, and bone fractures may be concerns in your 70s. You might notice increased fatigue and sensitivity to cold temperatures. And of course, heart disease is still a concern as well.',
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
            name: 'Blood Pressure',
            average: '124/75',
            range: '',
            units: '',
            tooltip: '',
            type: 'cardiovascular',
            notes: [
              {
                title: 'Why?',
                content:
                  'Blood pressure numbers of less than 120/80 mm Hg (millimeters of mercury) are considered within the normal range. If your results fall into this category, stick with heart-healthy habits like following a balanced diet and getting regular exercise. Ideal blood pressure is considered to be between 90/60mmHg and 120/80mmHg. high blood pressure is considered to be 140/90mmHg or higher. low blood pressure is considered to be below 90/60mmHg.',
              },
            ],
          },
          {
            name: 'Resting Heart Rate',
            average: '124/75',
            range: '',
            units: 'Beats per minute',
            tooltip: '',
            type: 'cardiovascular',
            notes: [
              {
                title: 'Why?',
                content:
                  "A normal resting heart rate should be between 60 to 100 beats per minute, but it can vary from minute to minute. Your age and general health can also affect your pulse rate, so it's important to remember that a 'normal' pulse can vary from person to person.",
              },
            ],
          },
          {
            name: 'Heart Rate Variability',
            average: '124/75',
            range: '',
            units: 'Beats per minute',
            tooltip: '',
            type: 'cardiovascular',
            notes: [
              {
                title: 'Why?',
                content:
                  'Heart rate variability is where the amount of time between your heartbeats fluctuates slightly. These variations are very small, adding or subtracting a fraction of a second between beats.',
              },
            ],
          },
        ],
      },
      {
        type: 'physical',
        markers: [
          {
            name: 'BMI',
            average: '29',
            aboveAverage: '27',
            superior: '24',
            units: 'Score',
            tooltip: '',
            type: 'physical',
            notes: [
              {
                title: 'Why?',
                content:
                  'If your BMI is less than 18.5, it falls within the underweight range. If your BMI is 18.5 to 24.9, it falls within the Healthy Weight range. If your BMI is 25.0 to 29.9, it falls within the overweight range. If your BMI is 30.0 or higher, it falls within the obese range. The body mass index (BMI) is a measure that uses your height and weight to work out if your weight is healthy. For most adults, an ideal BMI is in the 18.5 to 24.9 range. For children and young people aged 2 to 18, the BMI calculation takes into account age and gender as well as height and weight.',
              },
            ],
          },
          {
            name: 'Active Minutes Per Week',
            average: '150',
            units: 'Minutes per week',
            tooltip: 'minutes per week',
            type: 'physical',
            notes: [
              {
                title: 'Why?',
                content:
                  'Get at least 150 minutes per week of moderate-intensity aerobic activity or 75 minutes per week of vigorous aerobic activity, or a combination of both, preferably spread throughout the week.',
              },
            ],
          },
          {
            name: 'Strength Training',
            average: '2',
            units: 'Sessions per week',
            tooltip: 'sessions per week',
            type: 'physical',
            notes: [
              {
                title: 'Why?',
                content:
                  'The ideal breakdown of cardio and strength work varies depending on your specific goals, but in general, four to five days a week of exercise will do the trick if you’re aiming to improve or maintain your fitness.',
              },
            ],
          },
          {
            name: 'Mile Time',
            average: '15',
            aboveAverage: '13',
            superior: '12',
            units: 'Minutes',
            tooltip: 'minutes',
            type: 'physical',
            kilo_range: '7:00 - 8:30',
            kilo_avg: '7:45',
            notes: [
              {
                title: 'Why?',
                content:
                  'The one-mile endurance run or walk test is a commonly used walk/run test of aerobic endurance. ',
              },
            ],
          },
          {
            name: 'Push Ups',
            average: '5',
            aboveAverage: '7',
            superior: '9',
            units: 'Reps',
            tooltip: 'bent knee',
            type: 'physical',
            notes: [
              {
                title: 'Why?',
                content:
                  "Push-ups are an equipment-free resistance exercise that can help you build muscle strength. And they're not just for serious gym-goers. Whether you do traditional push-ups or a modified version, you'll enjoy research-proven health benefits. ",
              },
            ],
          },
        ],
      },
      {
        type: 'flexibility',
        markers: [
          {
            name: 'Squat Rep Test',
            average: '9',
            units: 'Reps',
            aboveAverage: '12',
            superior: '17',
            type: 'flexibility',
            notes: [
              {
                title: 'Why?',
                content:
                  'Squats burn calories and might help you lose weight. They also lower your chances of injuring your knees and ankles. As you exercise, the movement strengthens your tendons, bones, and ligaments around the leg muscles.',
              },
              {
                title: 'Test',
                content:
                  "Stand in front of a chair or bench with your feet at shoulder's width apart, facing away from it. Place your hands on your hips. Squat down and lightly touch the chair before standing back up. A good sized chair is one that makes your knees at right angles when you are sitting. Keep doing this until you're fatigued.",
              },
            ],
            videoThumb: 'squatTest.png',
            videoURL: 'https://www.youtube.com/watch?v=nVsWUtN7NXI',
          },
          {
            name: 'Sit and Reach',
            average: '2',
            units: 'Inches',
            aboveAverage: '4',
            superior: '6',
            type: 'flexibility',
            notes: [
              {
                title: 'Why?',
                content:
                  'Hamstring flexibility is highly desirable in most sports involving running and is an integral part of activities such as dancing, gymnastics and martial arts.The desire for hamstring flexibility in running sports is primarily aimed at reducing muscle tears or strains and improving running efficiency, agility and speed.',
              },
              {
                title: 'Test',
                content:
                  'Sit on the floor with legs stretched out straight ahead. The soles of the feet are placed flat against the box. Both knees should be locked and pressed flat to the floor. With the palms facing downwards, and the hands on top of each other or side by side, the subject reaches forward along the measuring line as far as possible. Reach out and hold that position for at least one-two seconds while the distance is recorded.',
              },
            ],
            videoThumb: 'sitReachTest.png',
            videoURL: 'https://www.youtube.com/watch?v=S-UWdErmXuk',
          },
          {
            name: 'Shoulder Flexibility',
            average: '6',
            aboveAverage: '4',
            units: 'Inches',
            superior: '1',
            type: 'flexibility',
            notes: [
              {
                title: 'Why?',
                content:
                  'Shoulder overhead mobility is an essential human movement that you should strive to always possess! Its a very valuable asset, especially for overhead athletes considering a reduced total range of motion at the shoulder joint has been identified as a risk factor for shoulder injury (1).',
              },
              {
                title: 'Test',
                content:
                  'In a standing position, place one hand behind the head and back over the shoulder, and reach as far as possible down the middle of your back. Place the other arm behind your back, palm facing outward and fingers upward. Reach up as far as possible attempting to touch both hands. An assistant is required to direct the subject so that the fingers are aligned, and to measure the distance between the tips of the middle fingers.',
              },
            ],
            videoThumb: 'shoulderTest.png',
            videoURL: 'https://www.youtube.com/watch?v=usmIvGlCzNk',
          },
        ],
      },
    ],
    appointments: {
      doctorCheckups: [
        {
          name: 'Annual PCP Appointment',
          link: 'https://health.clevelandclinic.org/why-you-need-an-annual-physical-and-what-to-expect',
        },
        {
          name: 'Blood Pressure Screening',
          link: 'https://www.mayoclinic.org/tests-procedures/blood-pressure-test/about/pac-20393098',
        },
        {
          name: 'Cholesterol Screening',
          link: 'https://www.cdc.gov/cholesterol/cholesterol_screening.htm',
        },
        {
          name: 'Diabetes Screening',
          link: 'https://www.cdc.gov/diabetes/basics/getting-tested.html',
        },
        {
          name: 'Breast Cancer Screening',
          link: 'https://www.cdc.gov/cancer/breast/basic_info/screening.htm',
        },
        {
          name: 'Cervical Cancer Screening',
          link: 'https://www.cdc.gov/cancer/cervical/basic_info/screening.htm',
        },
        {
          name: 'Colorectal Cancer Screening',
          link: 'https://www.cdc.gov/cancer/colorectal/basic_info/screening/tests.htm',
        },
        {
          name: 'Eye Exam',
          link: 'https://www.aao.org/eye-health/tips-prevention/eye-exams-101',
        },
      ],
      dentalCheckups: [
        {
          name: 'Annual Dental Appointment',
          link: 'https://my.clevelandclinic.org/health/treatments/11187-dental-check-up',
        },
      ],
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
  male_20_39: {
    age: '20-39',
    sex: 'Male',
    summary: {
      description:
        'Even if you feel healthy, it’s important to establish a relationship with a primary care doctor. This can be your go-to doctor for every question and concern. Lots of changes happen in your 20s. Many men are on their own after previously living at home or college. That means a new diet. Maybe some long, eight-hour workdays sitting in front of a computer. Dramatic diet and exercise changes can affect your health. Many men in their 30s start encountering some orthopedic problems. The body stops doesn’t heal quite as quickly as it used to. You’ll also notice some metabolism changes. You might have to work a little harder to maintain muscle mass and to keep off the extra pounds. Your doctor will help you stay active and healthy.',
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
            name: 'Blood Pressure',
            average: '124/75',
            range: '',
            units: '',
            tooltip: '',
            type: 'cardiovascular',
            notes: [
              {
                title: 'Why',
                content:
                  'Blood pressure numbers of less than 120/80 mm Hg (millimeters of mercury) are considered within the normal range. If your results fall into this category, stick with heart-healthy habits like following a balanced diet and getting regular exercise. Ideal blood pressure is considered to be between 90/60mmHg and 120/80mmHg. high blood pressure is considered to be 140/90mmHg or higher. low blood pressure is considered to be below 90/60mmHg.',
              },
            ],
          },
          {
            name: 'Resting Heart Rate',
            average: '124/75',
            range: '',
            units: 'Beats per minute',
            tooltip: '',
            type: 'cardiovascular',
            notes: [
              {
                title: 'Why',
                content:
                  "A normal resting heart rate should be between 60 to 100 beats per minute, but it can vary from minute to minute. Your age and general health can also affect your pulse rate, so it's important to remember that a 'normal' pulse can vary from person to person.",
              },
            ],
          },
          {
            name: 'Heart Rate Variability',
            average: '124/75',
            range: '',
            units: 'Beats per minute',
            tooltip: '',
            type: 'cardiovascular',
            notes: [
              {
                title: 'Why',
                content:
                  'Heart rate variability is where the amount of time between your heartbeats fluctuates slightly. These variations are very small, adding or subtracting a fraction of a second between beats.',
              },
            ],
          },
        ],
      },
      {
        type: 'physical',
        markers: [
          {
            name: 'BMI',
            average: '29',
            aboveAverage: '27',
            superior: '24',
            units: 'Score',
            tooltip: '',
            type: 'physical',
            notes: [
              {
                title: 'Why',
                content:
                  'If your BMI is less than 18.5, it falls within the underweight range. If your BMI is 18.5 to 24.9, it falls within the Healthy Weight range. If your BMI is 25.0 to 29.9, it falls within the overweight range. If your BMI is 30.0 or higher, it falls within the obese range. The body mass index (BMI) is a measure that uses your height and weight to work out if your weight is healthy. For most adults, an ideal BMI is in the 18.5 to 24.9 range. For children and young people aged 2 to 18, the BMI calculation takes into account age and gender as well as height and weight.',
              },
            ],
          },
          {
            name: 'Active Minutes Per Week',
            average: '150',
            units: 'Minutes per week',
            tooltip: 'minutes per week',
            type: 'physical',
            notes: [
              {
                title: 'Why',
                content:
                  'Get at least 150 minutes per week of moderate-intensity aerobic activity or 75 minutes per week of vigorous aerobic activity, or a combination of both, preferably spread throughout the week.',
              },
            ],
          },
          {
            name: 'Strength Training',
            average: '2',
            units: 'Sessions per week',
            tooltip: 'sessions per week',
            type: 'physical',
            notes: [
              {
                title: 'How',
                content:
                  'The ideal breakdown of cardio and strength work varies depending on your specific goals, but in general, four to five days a week of exercise will do the trick if you’re aiming to improve or maintain your fitness.',
              },
            ],
          },
          {
            name: 'Mile Time',
            average: '10',
            aboveAverage: '9',
            superior: '7',
            units: 'Minutes',
            tooltip: 'minutes',
            type: 'physical',
            kilo_range: '7:00 - 8:30',
            kilo_avg: '7:45',
            notes: [
              {
                title: 'Test',
                content:
                  'The one-mile endurance run or walk test is a commonly used walk/run test of aerobic endurance. ',
              },
            ],
          },
          {
            name: 'Push Ups',
            average: '10',
            aboveAverage: '14',
            superior: '18',
            units: 'Reps',
            tooltip: 'bent knee',
            type: 'physical',
            notes: [
              {
                title: 'Why',
                content:
                  "Push-ups are an equipment-free resistance exercise that can help you build muscle strength. And they're not just for serious gym-goers. Whether you do traditional push-ups or a modified version, you'll enjoy research-proven health benefits. ",
              },
            ],
          },
        ],
      },
      {
        type: 'flexibility',
        markers: [
          {
            name: 'Squat Rep Test',
            average: '27',
            units: 'Reps',
            aboveAverage: '31',
            superior: '35',
            type: 'flexibility',
            notes: [
              {
                title: 'Why?',
                content:
                  'Squats burn calories and might help you lose weight. They also lower your chances of injuring your knees and ankles. As you exercise, the movement strengthens your tendons, bones, and ligaments around the leg muscles.',
              },
              {
                title: 'Test',
                content:
                  "Stand in front of a chair or bench with your feet at shoulder's width apart, facing away from it. Place your hands on your hips. Squat down and lightly touch the chair before standing back up. A good sized chair is one that makes your knees at right angles when you are sitting. Keep doing this until you're fatigued.",
              },
            ],
            videoThumb: 'squatTest.png',
            videoURL: 'https://www.youtube.com/watch?v=nVsWUtN7NXI',
          },
          {
            name: 'Sit and Reach',
            average: '17',
            units: 'Inches',
            aboveAverage: '19',
            superior: '21',
            notes: [
              {
                title: 'Why?',
                content:
                  'Hamstring flexibility is highly desirable in most sports involving running and is an integral part of activities such as dancing, gymnastics and martial arts.The desire for hamstring flexibility in running sports is primarily aimed at reducing muscle tears or strains and improving running efficiency, agility and speed.',
              },
              {
                title: 'Test',
                content:
                  'Sit on the floor with legs stretched out straight ahead. The soles of the feet are placed flat against the box. Both knees should be locked and pressed flat to the floor. With the palms facing downwards, and the hands on top of each other or side by side, the subject reaches forward along the measuring line as far as possible. Reach out and hold that position for at least one-two seconds while the distance is recorded.',
              },
            ],
            videoThumb: 'sitReachTest.png',
            videoURL: 'https://www.youtube.com/watch?v=S-UWdErmXuk',
          },
          {
            name: 'Shoulder Flexibility',
            average: '5',
            aboveAverage: '4',
            units: 'Inches',
            superior: '2',
            type: 'flexibility',
            notes: [
              {
                title: 'Why?',
                content:
                  'Shoulder overhead mobility is an essential human movement that you should strive to always possess! Its a very valuable asset, especially for overhead athletes considering a reduced total range of motion at the shoulder joint has been identified as a risk factor for shoulder injury (1).',
              },
              {
                title: 'Test',
                content:
                  'In a standing position, place one hand behind the head and back over the shoulder, and reach as far as possible down the middle of your back. Place the other arm behind your back, palm facing outward and fingers upward. Reach up as far as possible attempting to touch both hands. An assistant is required to direct the subject so that the fingers are aligned, and to measure the distance between the tips of the middle fingers.',
              },
            ],
            videoThumb: 'shoulderTest.png',
            videoURL: 'https://www.youtube.com/watch?v=usmIvGlCzNk',
          },
        ],
      },
    ],
    appointments: {
      doctorCheckups: [
        {
          name: 'Annual PCP Appointment',
          link: 'https://health.clevelandclinic.org/why-you-need-an-annual-physical-and-what-to-expect',
        },
        {
          name: 'Blood Pressure Screening',
          link: 'https://www.mayoclinic.org/tests-procedures/blood-pressure-test/about/pac-20393098',
        },
        {
          name: 'Cholesterol Screening',
          link: 'https://www.cdc.gov/cholesterol/cholesterol_screening.htm',
        },
        {
          name: 'Diabetes Screening',
          link: 'https://www.cdc.gov/diabetes/basics/getting-tested.html',
        },
        {
          name: 'Breast Cancer Screening',
          link: 'https://www.cdc.gov/cancer/breast/basic_info/screening.htm',
        },
        {
          name: 'Cervical Cancer Screening',
          link: 'https://www.cdc.gov/cancer/cervical/basic_info/screening.htm',
        },
        {
          name: 'Colorectal Cancer Screening',
          link: 'https://www.cdc.gov/cancer/colorectal/basic_info/screening/tests.htm',
        },
        {
          name: 'Eye Exam',
          link: 'https://www.aao.org/eye-health/tips-prevention/eye-exams-101',
        },
      ],
      dentalCheckups: [
        {
          name: 'Annual Dental Appointment',
          link: 'https://my.clevelandclinic.org/health/treatments/11187-dental-check-up',
        },
      ],
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
  male_40_59: {
    age: '40-59',
    sex: 'Male',
    summary: {
      description:
        'Your risk for heart disease goes up in your 40s if you’re a man; Harvard Health Publications says that up to 10 percent of all heart attacks occur before age 45, particularly in men.',
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
            name: 'Blood Pressure',
            average: '124/75',
            range: '',
            units: '',
            tooltip: '',
            type: 'cardiovascular',
            notes: [
              {
                title: 'Why',
                content:
                  'Blood pressure numbers of less than 120/80 mm Hg (millimeters of mercury) are considered within the normal range. If your results fall into this category, stick with heart-healthy habits like following a balanced diet and getting regular exercise. Ideal blood pressure is considered to be between 90/60mmHg and 120/80mmHg. high blood pressure is considered to be 140/90mmHg or higher. low blood pressure is considered to be below 90/60mmHg.',
              },
            ],
          },
          {
            name: 'Resting Heart Rate',
            average: '124/75',
            range: '',
            units: 'Beats per minute',
            tooltip: '',
            type: 'cardiovascular',
            notes: [
              {
                title: 'Why',
                content:
                  "A normal resting heart rate should be between 60 to 100 beats per minute, but it can vary from minute to minute. Your age and general health can also affect your pulse rate, so it's important to remember that a 'normal' pulse can vary from person to person.",
              },
            ],
          },
          {
            name: 'Heart Rate Variability',
            average: '124/75',
            range: '',
            units: 'Beats per minute',
            tooltip: '',
            type: 'cardiovascular',
            notes: [
              {
                title: 'Why',
                content:
                  'Heart rate variability is where the amount of time between your heartbeats fluctuates slightly. These variations are very small, adding or subtracting a fraction of a second between beats.',
              },
            ],
          },
        ],
      },
      {
        type: 'physical',
        markers: [
          {
            name: 'BMI',
            average: '29',
            aboveAverage: '27',
            superior: '24',
            units: 'Score',
            tooltip: '',
            type: 'physical',
            notes: [
              {
                title: 'Why',
                content:
                  'If your BMI is less than 18.5, it falls within the underweight range. If your BMI is 18.5 to 24.9, it falls within the Healthy Weight range. If your BMI is 25.0 to 29.9, it falls within the overweight range. If your BMI is 30.0 or higher, it falls within the obese range. The body mass index (BMI) is a measure that uses your height and weight to work out if your weight is healthy. For most adults, an ideal BMI is in the 18.5 to 24.9 range. For children and young people aged 2 to 18, the BMI calculation takes into account age and gender as well as height and weight.',
              },
            ],
          },
          {
            name: 'Active Minutes Per Week',
            average: '150',
            units: 'Minutes per week',
            tooltip: 'minutes per week',
            type: 'physical',
            notes: [
              {
                title: 'Why',
                content:
                  'Get at least 150 minutes per week of moderate-intensity aerobic activity or 75 minutes per week of vigorous aerobic activity, or a combination of both, preferably spread throughout the week.',
              },
            ],
          },
          {
            name: 'Strength Training',
            average: '2',
            units: 'Sessions per week',
            tooltip: 'sessions per week',
            type: 'physical',
            notes: [
              {
                title: 'Why',
                content:
                  'The ideal breakdown of cardio and strength work varies depending on your specific goals, but in general, four to five days a week of exercise will do the trick if you’re aiming to improve or maintain your fitness.',
              },
            ],
          },
          {
            name: 'Mile Time',
            average: '11',
            aboveAverage: '9',
            superior: '8',
            units: 'Minutes',
            tooltip: 'minutes',
            type: 'physical',
            kilo_range: '7:00 - 8:30',
            kilo_avg: '7:45',
            notes: [
              {
                title: 'Test',
                content:
                  'The one-mile endurance run or walk test is a commonly used walk/run test of aerobic endurance. ',
              },
            ],
          },
          {
            name: 'Push Ups',
            average: '8',
            aboveAverage: '11',
            superior: '14',
            units: 'Reps',
            tooltip: 'bent knee',
            type: 'physical',
            notes: [
              {
                title: 'Why?',
                content:
                  "Push-ups are an equipment-free resistance exercise that can help you build muscle strength. And they're not just for serious gym-goers. Whether you do traditional push-ups or a modified version, you'll enjoy research-proven health benefits. ",
              },
            ],
          },
        ],
      },
      {
        type: 'flexibility',
        markers: [
          {
            name: 'Squat Rep Test',
            average: '21',
            units: 'Reps',
            aboveAverage: '25',
            superior: '30',
            type: 'flexibility',
            notes: [
              {
                title: 'Why?',
                content:
                  'Squats burn calories and might help you lose weight. They also lower your chances of injuring your knees and ankles. As you exercise, the movement strengthens your tendons, bones, and ligaments around the leg muscles.',
              },
              {
                title: 'Test',
                content:
                  "Stand in front of a chair or bench with your feet at shoulder's width apart, facing away from it. Place your hands on your hips. Squat down and lightly touch the chair before standing back up. A good sized chair is one that makes your knees at right angles when you are sitting. Keep doing this until you're fatigued.",
              },
            ],
            videoThumb: 'squatTest.png',
            videoURL: 'https://www.youtube.com/watch?v=nVsWUtN7NXI',
          },
          {
            name: 'Sit and Reach',
            average: '15',
            units: 'Inches',
            aboveAverage: '17',
            superior: '19',
            type: 'flexibility',
            notes: [
              {
                title: 'Why?',
                content:
                  'Hamstring flexibility is highly desirable in most sports involving running and is an integral part of activities such as dancing, gymnastics and martial arts.The desire for hamstring flexibility in running sports is primarily aimed at reducing muscle tears or strains and improving running efficiency, agility and speed.',
              },
              {
                title: 'Test',
                content:
                  'Sit on the floor with legs stretched out straight ahead. The soles of the feet are placed flat against the box. Both knees should be locked and pressed flat to the floor. With the palms facing downwards, and the hands on top of each other or side by side, the subject reaches forward along the measuring line as far as possible. Reach out and hold that position for at least one-two seconds while the distance is recorded.',
              },
            ],
            videoThumb: 'sitReachTest.png',
            videoURL: 'https://www.youtube.com/watch?v=S-UWdErmXuk',
          },
          {
            name: 'Shoulder Flexibility',
            average: '7',
            aboveAverage: '4',
            units: 'Inches',
            superior: '1',
            type: 'flexibility',
            notes: [
              {
                title: 'Why?',
                content:
                  'Shoulder overhead mobility is an essential human movement that you should strive to always possess! Its a very valuable asset, especially for overhead athletes considering a reduced total range of motion at the shoulder joint has been identified as a risk factor for shoulder injury (1).',
              },
              {
                title: 'Test',
                content:
                  'In a standing position, place one hand behind the head and back over the shoulder, and reach as far as possible down the middle of your back. Place the other arm behind your back, palm facing outward and fingers upward. Reach up as far as possible attempting to touch both hands. An assistant is required to direct the subject so that the fingers are aligned, and to measure the distance between the tips of the middle fingers.',
              },
            ],
            videoThumb: 'shoulderTest.png',
            videoURL: 'https://www.youtube.com/watch?v=usmIvGlCzNk',
          },
        ],
      },
    ],
    appointments: {
      doctorCheckups: [
        {
          name: 'Annual PCP Appointment',
          link: 'https://health.clevelandclinic.org/why-you-need-an-annual-physical-and-what-to-expect',
        },
        {
          name: 'Blood Pressure Screening',
          link: 'https://www.mayoclinic.org/tests-procedures/blood-pressure-test/about/pac-20393098',
        },
        {
          name: 'Cholesterol Screening',
          link: 'https://www.cdc.gov/cholesterol/cholesterol_screening.htm',
        },
        {
          name: 'Diabetes Screening',
          link: 'https://www.cdc.gov/diabetes/basics/getting-tested.html',
        },
        {
          name: 'Breast Cancer Screening',
          link: 'https://www.cdc.gov/cancer/breast/basic_info/screening.htm',
        },
        {
          name: 'Cervical Cancer Screening',
          link: 'https://www.cdc.gov/cancer/cervical/basic_info/screening.htm',
        },
        {
          name: 'Colorectal Cancer Screening',
          link: 'https://www.cdc.gov/cancer/colorectal/basic_info/screening/tests.htm',
        },
        {
          name: 'Eye Exam',
          link: 'https://www.aao.org/eye-health/tips-prevention/eye-exams-101',
        },
      ],
      dentalCheckups: [
        {
          name: 'Annual Dental Appointment',
          link: 'https://my.clevelandclinic.org/health/treatments/11187-dental-check-up',
        },
      ],
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
  male_60_79: {
    age: '60-79',
    sex: 'Male',
    summary: {
      description:
        'Men your age have three big concerns: heart disease, diabetes, and cancer. Things you can do to prevent these things include: not smoking, getting regular exercise, and ensuring you get regular cancer screenings with your doctor.',
      keyPoints: [
        "Don't smoke",
        'Exercise - Cardio, Strength training, Stability training',
        'Get regular cancer screenings with your doctor',
      ],
    },
    healthMarkers: [
      {
        type: 'cardiovascular',
        markers: [
          {
            name: 'Blood Pressure',
            average: '133/72',
            range: '115/60-151/84',
            units: '',
            tooltip: '',
            type: 'cardiovascular',
            notes: [
              {
                title: 'Why',
                content:
                  'Blood pressure numbers of less than 120/80 mm Hg (millimeters of mercury) are considered within the normal range. If your results fall into this category, stick with heart-healthy habits like following a balanced diet and getting regular exercise. Ideal blood pressure is considered to be between 90/60mmHg and 120/80mmHg. high blood pressure is considered to be 140/90mmHg or higher. low blood pressure is considered to be below 90/60mmHg.',
              },
            ],
          },
          {
            name: 'Resting Heart Rate',
            average: '74',
            range: '64-85',
            units: 'Beats per minute',
            tooltip: '',
            type: 'cardiovascular',
            notes: [
              {
                title: 'Why',
                content:
                  "A normal resting heart rate should be between 60 to 100 beats per minute, but it can vary from minute to minute. Your age and general health can also affect your pulse rate, so it's important to remember that a 'normal' pulse can vary from person to person.",
              },
            ],
          },
          {
            name: 'Heart Rate Variability',
            average: '52',
            range: '49-65',
            units: 'Beats per minute',
            tooltip: '',
            type: 'cardiovascular',
            notes: [
              {
                title: 'Why',
                content:
                  'Heart rate variability is where the amount of time between your heartbeats fluctuates slightly. These variations are very small, adding or subtracting a fraction of a second between beats.',
              },
            ],
          },
        ],
      },
      {
        type: 'physical',
        markers: [
          {
            name: 'BMI',
            average: '29',
            aboveAverage: '27',
            superior: '23',
            units: 'Score',
            tooltip: '',
            type: 'physical',
            notes: [
              {
                title: 'Why',
                content:
                  'If your BMI is less than 18.5, it falls within the underweight range. If your BMI is 18.5 to 24.9, it falls within the Healthy Weight range. If your BMI is 25.0 to 29.9, it falls within the overweight range. If your BMI is 30.0 or higher, it falls within the obese range. The body mass index (BMI) is a measure that uses your height and weight to work out if your weight is healthy. For most adults, an ideal BMI is in the 18.5 to 24.9 range. For children and young people aged 2 to 18, the BMI calculation takes into account age and gender as well as height and weight.',
              },
            ],
          },
          {
            name: 'Active Minutes Per Week',
            average: 'Mins per week: 150',
            units: 'Minutes per week',
            tooltip: 'minutes per week',
            type: 'physical',
            notes: [
              {
                title: 'Why',
                content:
                  'Get at least 150 minutes per week of moderate-intensity aerobic activity or 75 minutes per week of vigorous aerobic activity, or a combination of both, preferably spread throughout the week.',
              },
            ],
          },
          {
            name: 'Strength Training',
            average: '2',
            units: 'Sessions per week',
            tooltip: 'sessions per week',
            type: 'physical',
            notes: [
              {
                title: 'How',
                content:
                  'The ideal breakdown of cardio and strength work varies depending on your specific goals, but in general, four to five days a week of exercise will do the trick if you’re aiming to improve or maintain your fitness.',
              },
            ],
          },
          {
            name: 'Mile Time',
            average: '13',
            aboveAverage: '11',
            superior: '10',
            units: 'Minutes',
            tooltip: 'minutes',
            type: 'physical',
            kilo_range: '7:00 - 8:30',
            kilo_avg: '7:45',
            notes: [
              {
                title: 'Test',
                content:
                  'The one-mile endurance run or walk test is a commonly used walk/run test of aerobic endurance. ',
              },
            ],
          },
          {
            name: 'Push Ups',
            average: '6',
            aboveAverage: '8',
            superior: '12',
            units: 'Reps',
            tooltip: 'standard push up',
            type: 'physical',
            notes: [
              {
                title: 'Why',
                content:
                  "Push-ups are an equipment-free resistance exercise that can help you build muscle strength. And they're not just for serious gym-goers. Whether you do traditional push-ups or a modified version, you'll enjoy research-proven health benefits. ",
              },
            ],
          },
        ],
      },
      {
        type: 'flexibility',
        markers: [
          {
            name: 'Squat Rep Test',
            average: '15',
            units: 'Reps',
            aboveAverage: '19',
            superior: '24',
            type: 'flexibility',
            notes: [
              {
                title: 'Why?',
                content:
                  'Squats burn calories and might help you lose weight. They also lower your chances of injuring your knees and ankles. As you exercise, the movement strengthens your tendons, bones, and ligaments around the leg muscles.',
              },
              {
                title: 'Test',
                content:
                  "Stand in front of a chair or bench with your feet at shoulder's width apart, facing away from it. Place your hands on your hips. Squat down and lightly touch the chair before standing back up. A good sized chair is one that makes your knees at right angles when you are sitting. Keep doing this until you're fatigued.",
              },
            ],
            videoThumb: 'squatTest.png',
            videoURL: 'https://www.youtube.com/watch?v=nVsWUtN7NXI',
          },
          {
            name: 'Sit and Reach',
            average: '13',
            units: 'Inches',
            aboveAverage: '14',
            superior: '16',
            type: 'flexibility',
            notes: [
              {
                title: 'Why?',
                content:
                  'Hamstring flexibility is highly desirable in most sports involving running and is an integral part of activities such as dancing, gymnastics and martial arts.The desire for hamstring flexibility in running sports is primarily aimed at reducing muscle tears or strains and improving running efficiency, agility and speed.',
              },
              {
                title: 'Test',
                content:
                  'Sit on the floor with legs stretched out straight ahead. The soles of the feet are placed flat against the box. Both knees should be locked and pressed flat to the floor. With the palms facing downwards, and the hands on top of each other or side by side, the subject reaches forward along the measuring line as far as possible. Reach out and hold that position for at least one-two seconds while the distance is recorded.',
              },
            ],
            videoThumb: 'sitReachTest.png',
            videoURL: 'https://www.youtube.com/watch?v=S-UWdErmXuk',
          },
          {
            name: 'Shoulder Flexibility',
            average: '8',
            aboveAverage: '5',
            units: 'Inches',
            superior: '2',
            type: 'flexibility',

            notes: [
              {
                title: 'Why?',
                content:
                  'Shoulder overhead mobility is an essential human movement that you should strive to always possess! Its a very valuable asset, especially for overhead athletes considering a reduced total range of motion at the shoulder joint has been identified as a risk factor for shoulder injury (1).',
              },
              {
                title: 'Test',
                content:
                  'In a standing position, place one hand behind the head and back over the shoulder, and reach as far as possible down the middle of your back. Place the other arm behind your back, palm facing outward and fingers upward. Reach up as far as possible attempting to touch both hands. An assistant is required to direct the subject so that the fingers are aligned, and to measure the distance between the tips of the middle fingers.',
              },
            ],
            videoThumb: 'shoulderTest.png',
            videoURL: 'https://www.youtube.com/watch?v=usmIvGlCzNk',
          },
        ],
      },
    ],
    appointments: {
      doctorCheckups: [
        {
          name: 'Annual PCP Appointment',
          link: 'https://health.clevelandclinic.org/why-you-need-an-annual-physical-and-what-to-expect',
        },
        {
          name: 'Blood Pressure Screening',
          link: 'https://www.mayoclinic.org/tests-procedures/blood-pressure-test/about/pac-20393098',
        },
        {
          name: 'Cholesterol Screening',
          link: 'https://www.cdc.gov/cholesterol/cholesterol_screening.htm',
        },
        {
          name: 'Diabetes Screening',
          link: 'https://www.cdc.gov/diabetes/basics/getting-tested.html',
        },
        {
          name: 'Breast Cancer Screening',
          link: 'https://www.cdc.gov/cancer/breast/basic_info/screening.htm',
        },
        {
          name: 'Cervical Cancer Screening',
          link: 'https://www.cdc.gov/cancer/cervical/basic_info/screening.htm',
        },
        {
          name: 'Colorectal Cancer Screening',
          link: 'https://www.cdc.gov/cancer/colorectal/basic_info/screening/tests.htm',
        },
        {
          name: 'Eye Exam',
          link: 'https://www.aao.org/eye-health/tips-prevention/eye-exams-101',
        },
      ],
      dentalCheckups: [
        {
          name: 'Annual Dental Appointment',
          link: 'https://my.clevelandclinic.org/health/treatments/11187-dental-check-up',
        },
      ],
    },
    degradation: [
      {
        name: 'Key Lookouts',
        text: 'The largest risk factors for men your age include heart disease, prostate cancer, and diabetes. The best way to treat both heart disease and diabetes is exercise. Men who exercise at least 30 minutes per day have a 50% decreased risk of diabetes. For your prostate, it is best to get regular screenings with your doctor.',
        bulletPoints: ['Cardiovascular health', 'Prostate Cancer.', 'Diabetes'],
      },
      {
        name: 'Longevity info',
        text: "Strength and balance are often overlooked but are one of the most heavily contributing factors to your health as you age. If you fall & break a hip your mortality rate will skyrocket, and the less muscle mass and balance you have the more likely this is to happen.\n\nA regular workout routine that includes strength and stability training is going to be very important to maintain quality of life for men your age. The goal should be functional movement. This will also greatly reduce your risk of 2 out of the 3 risk largest risk factors you face: heart disease and diabetes.\n\nOther serious risk factors for men your age include cancer, influenza, and pneumonia. If you have any kind of respiratory issues affecting you such as asthma or COPD this is more concerning for you and your level of caution around this should be higher. If you smoke, the best thing you can do for yourself is stop. 90% of cases of lung cancer result from smoking, and it's not too late for you no matter your age.\n\nLesser known but important issues for men your age are oral health and depression. Oral health has been strongly linked with good cardiovascular health and less risk for infection. Depression is just as common as men as in women but men are much less likely to report this issue to anyone. It increases your all-cause-mortality rate significanltly and should not be ingored. So to breifly recap all the main points here:",
        bulletPoints: [
          "Don't smoke",
          'Do strength and stability training',
          'Get screenings for prostate cancer',
          'Take good care of your health',
          'Be mindful of and take steps to treat depression',
        ],
      },
    ],
  },
}

export const quotes = [
  'Blood pressure numbers of less than 120/80 mm Hg (millimeters of mercury) are considered within the normal range. If your results fall into this category, stick with heart-healthy habits like following a balanced diet and getting regular exercise.',

  'Ideal blood pressure is considered to be between 90/60mmHg and 120/80mmHg. high blood pressure is considered to be 140/90mmHg or higher. low blood pressure is considered to be below 90/60mmHg.',

  'The one-mile endurance run or walk test is a commonly used walk/run test of aerobic endurance. ',

  'The one-kilo endurance run or walk test is a commonly used walk/run test of aerobic endurance. ',

  "Push-ups are an equipment-free resistance exercise that can help you build muscle strength. And they're not just for serious gym-goers. Whether you do traditional push-ups or a modified version, you'll enjoy research-proven health benefits. ",

  'Squats burn calories and might help you lose weight. They also lower your chances of injuring your knees and ankles. As you exercise, the movement strengthens your tendons, bones, and ligaments around the leg muscles.',

  'Hamstring flexibility is highly desirable in most sports involving running and is an integral part of activities such as dancing, gymnastics and martial arts.The desire for hamstring flexibility in running sports is primarily aimed at reducing muscle tears or strains and improving running efficiency, agility and speed.',
]

export default healthData
