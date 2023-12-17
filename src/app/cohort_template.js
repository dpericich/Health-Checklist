const healthData = {
  female_20_39: {
    age: '20-39',
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
            name: 'Blood Pressure',
            average: '124/75',
            range: [],
            tooltip: '',
            type: 'cardiovascular',
            comment:
              'Blood pressure numbers of less than 120/80 mm Hg (millimeters of mercury) are considered within the normal range. If your results fall into this category, stick with heart-healthy habits like following a balanced diet and getting regular exercise. Ideal blood pressure is considered to be between 90/60mmHg and 120/80mmHg. high blood pressure is considered to be 140/90mmHg or higher. low blood pressure is considered to be below 90/60mmHg.',
          },
          {
            name: 'Resting Heart Rate',
            average: '124/75',
            range: '',
            tooltip: '',
            type: 'cardiovascular',
            comment:
              "A normal resting heart rate should be between 60 to 100 beats per minute, but it can vary from minute to minute. Your age and general health can also affect your pulse rate, so it's important to remember that a 'normal' pulse can vary from person to person.",
          },
          {
            name: 'Heart Rate Variability',
            average: '124/75',
            range: '',
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
            name: 'BMI',
            average: '29',
            range: '24-36',
            tooltip: '',
            type: 'physical',
            comment:
              'If your BMI is less than 18.5, it falls within the underweight range. If your BMI is 18.5 to 24.9, it falls within the Healthy Weight range. If your BMI is 25.0 to 29.9, it falls within the overweight range. If your BMI is 30.0 or higher, it falls within the obese range. The body mass index (BMI) is a measure that uses your height and weight to work out if your weight is healthy. For most adults, an ideal BMI is in the 18.5 to 24.9 range. For children and young people aged 2 to 18, the BMI calculation takes into account age and gender as well as height and weight.',
          },
          {
            name: 'Active Minutes Per Week',
            average: 'Mins per week: 150',
            tooltip: 'minutes per week',
            type: 'physical',
            comment:
              'Get at least 150 minutes per week of moderate-intensity aerobic activity or 75 minutes per week of vigorous aerobic activity, or a combination of both, preferably spread throughout the week.',
          },
          {
            name: 'Strength Training',
            average: 'Sessions per week: 2',
            tooltip: 'sessions per week',
            type: 'physical',
            comment:
              'The ideal breakdown of cardio and strength work varies depending on your specific goals, but in general, four to five days a week of exercise will do the trick if you’re aiming to improve or maintain your fitness.',
          },
          {
            name: 'Mile Time',
            average: 'Time: 13:00',
            range: '12:00 - 14:00',
            tooltip: 'minutes',
            type: 'physical',
            kilo_range: '7:00 - 8:30',
            kilo_avg: '7:45',
            comment:
              'The one-mile endurance run or walk test is a commonly used walk/run test of aerobic endurance. ',
          },
          {
            name: 'Push Ups',
            average: 'Reps: 10',
            range: '7-14 reps',
            tooltip: 'bent knee',
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
            name: 'Squat Rep Test',
            average: '21-23 reps',
            aboveAverage: '24-26 reps',
            superior: '>29 reps',
            type: 'flexibility',
            test: "Stand in front of a chair or bench with your feet at shoulder's width apart, facing away from it. Place your hands on your hips. Squat down and lightly touch the chair before standing back up. A good sized chair is one that makes your knees at right angles when you are sitting. Keep doing this until you're fatigued.",
            comment:
              'Squats burn calories and might help you lose weight. They also lower your chances of injuring your knees and ankles. As you exercise, the movement strengthens your tendons, bones, and ligaments around the leg muscles.',
          },
          {
            name: 'Sit and Reach',
            average: '21-23 in',
            aboveAverage: '24-26 in',
            superior: '>29 in',
            type: 'flexibility',
            test: 'Sit on the floor with legs stretched out straight ahead. The soles of the feet are placed flat against the box. Both knees should be locked and pressed flat to the floor. With the palms facing downwards, and the hands on top of each other or side by side, the subject reaches forward along the measuring line as far as possible. Reach out and hold that position for at least one-two seconds while the distance is recorded.',
            comment:
              'Hamstring flexibility is highly desirable in most sports involving running and is an integral part of activities such as dancing, gymnastics and martial arts.The desire for hamstring flexibility in running sports is primarily aimed at reducing muscle tears or strains and improving running efficiency, agility and speed.',
          },
          {
            name: 'Shoulder Flexibility',
            average: '> 3 in',
            aboveAverage: '3 - 1.5 in',
            superior: '< -1.5 in',
            type: 'flexibility',
            test: 'In a standing position, place one hand behind the head and back over the shoulder, and reach as far as possible down the middle of your back. Place the other arm behind your back, palm facing outward and fingers upward. Reach up as far as possible attempting to touch both hands. An assistant is required to direct the subject so that the fingers are aligned, and to measure the distance between the tips of the middle fingers.',
            comment:
              'Squats burn calories and might help you lose weight. They also lower your chances of injuring your knees and ankles. As you exercise, the movement strengthens your tendons, bones, and ligaments around the leg muscles.',
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
  female_40_59: {
    age: '40-59',
    sex: 'Female',
    summary: {
      description:
        'Women lose .5% bone density/yr starting in mid 30s. By post menopause up to 1.5% for average women, 3-5%/yr for those more prone to this issue. Most women begin to experience unintentional weight gain and loss of lean muscle mass. It is very important to lift weights, and get good amounts of cardiovascular exercise to metigate the risks associated with menopause.',
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
            tooltip:
              'systolic (when the heart beats)/dialstolic (when the heart rests)',
            type: 'cardiovascular',
            comment:
              'Blood pressure numbers of less than 120/80 mm Hg (millimeters of mercury) are considered within the normal range. If your results fall into this category, stick with heart-healthy habits like following a balanced diet and getting regular exercise. Ideal blood pressure is considered to be between 90/60mmHg and 120/80mmHg. high blood pressure is considered to be 140/90mmHg or higher. low blood pressure is considered to be below 90/60mmHg.',
          },
          {
            name: 'Resting Heart Rate',
            average: '75',
            range: '64-85',
            tooltip: 'Generally, the lower the more health you on this metric',
            type: 'cardiovascular',
            comment:
              "A normal resting heart rate should be between 60 to 100 beats per minute, but it can vary from minute to minute. Your age and general health can also affect your pulse rate, so it's important to remember that a 'normal' pulse can vary from person to person.",
          },
          {
            name: 'Heart Rate Variability',
            average: '55',
            range: '49-71',
            tooltip:
              'The higher the better, it signifies a more adaptive nervous system and more time in a physically relaxed state.',
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
            name: 'BMI',
            average: '29',
            range: '24-36',
            tooltip: '',
            type: 'physical',
            comment:
              'If your BMI is less than 18.5, it falls within the underweight range. If your BMI is 18.5 to 24.9, it falls within the Healthy Weight range. If your BMI is 25.0 to 29.9, it falls within the overweight range. If your BMI is 30.0 or higher, it falls within the obese range. The body mass index (BMI) is a measure that uses your height and weight to work out if your weight is healthy. For most adults, an ideal BMI is in the 18.5 to 24.9 range. For children and young people aged 2 to 18, the BMI calculation takes into account age and gender as well as height and weight.',
          },
          {
            name: 'Active Minutes Per Week',
            average: 'Mins per week: 150',
            tooltip: 'minutes per week',
            type: 'physical',
            comment:
              'Get at least 150 minutes per week of moderate-intensity aerobic activity or 75 minutes per week of vigorous aerobic activity, or a combination of both, preferably spread throughout the week.',
          },
          {
            name: 'Strength Training',
            average: 'Sessions per week: 2',
            tooltip: 'sessions per week',
            type: 'physical',
            comment:
              'The ideal breakdown of cardio and strength work varies depending on your specific goals, but in general, four to five days a week of exercise will do the trick if you’re aiming to improve or maintain your fitness.',
          },
          {
            name: 'Mile Time',
            average: 'Time: 13:00',
            range: '12:00 - 14:00',
            tooltip: 'minutes',
            type: 'physical',
            kilo_range: '7:00 - 8:30',
            kilo_avg: '7:45',
            comment:
              'The one-mile endurance run or walk test is a commonly used walk/run test of aerobic endurance. ',
          },
          {
            name: 'Push Ups',
            average: 'Reps: 10',
            range: '7-14 reps',
            tooltip: 'bent knee',
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
            name: 'Squat Rep Test',
            average: '15-17 reps',
            aboveAverage: '18-20 reps',
            superior: '>23 reps',
            type: 'flexibility',
            test: "Stand in front of a chair or bench with your feet at shoulder's width apart, facing away from it. Place your hands on your hips. Squat down and lightly touch the chair before standing back up. A good sized chair is one that makes your knees at right angles when you are sitting. Keep doing this until you're fatigued.",
            comment:
              'Squats burn calories and might help you lose weight. They also lower your chances of injuring your knees and ankles. As you exercise, the movement strengthens your tendons, bones, and ligaments around the leg muscles.',
          },
          {
            name: 'Sit and Reach',
            average: '17.5 in',
            aboveAverage: '19.0 in',
            superior: '20.5 in',
            type: 'flexibility',
            test: 'Sit on the floor with legs stretched out straight ahead. The soles of the feet are placed flat against the box. Both knees should be locked and pressed flat to the floor. With the palms facing downwards, and the hands on top of each other or side by side, the subject reaches forward along the measuring line as far as possible. Reach out and hold that position for at least one-two seconds while the distance is recorded.',
            comment:
              'Hamstring flexibility is highly desirable in most sports involving running and is an integral part of activities such as dancing, gymnastics and martial arts.The desire for hamstring flexibility in running sports is primarily aimed at reducing muscle tears or strains and improving running efficiency, agility and speed.',
          },
          {
            name: 'Shoulder Flexibility',
            belowAverage: '> 5 in',
            average: '5 - 1.5 in',
            superior: '< - 1.5 in',
            type: 'flexibility',
            test: 'In a standing position, place one hand behind the head and back over the shoulder, and reach as far as possible down the middle of your back. Place the other arm behind your back, palm facing outward and fingers upward. Reach up as far as possible attempting to touch both hands. An assistant is required to direct the subject so that the fingers are aligned, and to measure the distance between the tips of the middle fingers.',
            comment:
              'Squats burn calories and might help you lose weight. They also lower your chances of injuring your knees and ankles. As you exercise, the movement strengthens your tendons, bones, and ligaments around the leg muscles.',
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
  female_60_79: {
    age: '60-79',
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
            name: 'Blood Pressure',
            average: '124/75',
            range: '',
            tooltip: '',
            type: 'cardiovascular',
            comment:
              'Blood pressure numbers of less than 120/80 mm Hg (millimeters of mercury) are considered within the normal range. If your results fall into this category, stick with heart-healthy habits like following a balanced diet and getting regular exercise. Ideal blood pressure is considered to be between 90/60mmHg and 120/80mmHg. high blood pressure is considered to be 140/90mmHg or higher. low blood pressure is considered to be below 90/60mmHg.',
          },
          {
            name: 'Resting Heart Rate',
            average: '124/75',
            range: '',
            tooltip: '',
            type: 'cardiovascular',
            comment:
              "A normal resting heart rate should be between 60 to 100 beats per minute, but it can vary from minute to minute. Your age and general health can also affect your pulse rate, so it's important to remember that a 'normal' pulse can vary from person to person.",
          },
          {
            name: 'Heart Rate Variability',
            average: '124/75',
            range: '',
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
            name: 'BMI',
            average: '29',
            range: '24-36',
            tooltip: '',
            type: 'physical',
            comment:
              'If your BMI is less than 18.5, it falls within the underweight range. If your BMI is 18.5 to 24.9, it falls within the Healthy Weight range. If your BMI is 25.0 to 29.9, it falls within the overweight range. If your BMI is 30.0 or higher, it falls within the obese range. The body mass index (BMI) is a measure that uses your height and weight to work out if your weight is healthy. For most adults, an ideal BMI is in the 18.5 to 24.9 range. For children and young people aged 2 to 18, the BMI calculation takes into account age and gender as well as height and weight.',
          },
          {
            name: 'Active Minutes Per Week',
            average: 'Mins per week: 150',
            tooltip: 'minutes per week',
            type: 'physical',
            comment:
              'Get at least 150 minutes per week of moderate-intensity aerobic activity or 75 minutes per week of vigorous aerobic activity, or a combination of both, preferably spread throughout the week.',
          },
          {
            name: 'Strength Training',
            average: 'Sessions per week: 2',
            tooltip: 'sessions per week',
            type: 'physical',
            comment:
              'The ideal breakdown of cardio and strength work varies depending on your specific goals, but in general, four to five days a week of exercise will do the trick if you’re aiming to improve or maintain your fitness.',
          },
          {
            name: 'Mile Time',
            average: 'Time: 13:00',
            range: '12:00 - 14:00',
            tooltip: 'minutes',
            type: 'physical',
            kilo_range: '7:00 - 8:30',
            kilo_avg: '7:45',
            comment:
              'The one-mile endurance run or walk test is a commonly used walk/run test of aerobic endurance. ',
          },
          {
            name: 'Push Ups',
            average: 'Reps: 10',
            range: '7-14 reps',
            tooltip: 'bent knee',
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
            name: 'Squat Rep Test',
            average: '9-11 reps',
            aboveAverage: '12-14 reps',
            excellent: '>17 reps',
            type: 'flexibility',
            test: "Stand in front of a chair or bench with your feet at shoulder's width apart, facing away from it. Place your hands on your hips. Squat down and lightly touch the chair before standing back up. A good sized chair is one that makes your knees at right angles when you are sitting. Keep doing this until you're fatigued.",
            comment:
              'Squats burn calories and might help you lose weight. They also lower your chances of injuring your knees and ankles. As you exercise, the movement strengthens your tendons, bones, and ligaments around the leg muscles.',
          },
          {
            name: 'Sit and Reach',
            average: '-1 in - 4 in',
            aboveAverage: '2 in - 5 in',
            excellent: '> 5 in',
            type: 'flexibility',
            test: 'Sit on the floor with legs stretched out straight ahead. The soles of the feet are placed flat against the box. Both knees should be locked and pressed flat to the floor. With the palms facing downwards, and the hands on top of each other or side by side, the subject reaches forward along the measuring line as far as possible. Reach out and hold that position for at least one-two seconds while the distance is recorded.',
            comment:
              'Hamstring flexibility is highly desirable in most sports involving running and is an integral part of activities such as dancing, gymnastics and martial arts.The desire for hamstring flexibility in running sports is primarily aimed at reducing muscle tears or strains and improving running efficiency, agility and speed.',
          },
          {
            name: 'Shoulder Flexibility',
            belowAverage: '> 6 in',
            average: '6 - 2 in',
            superior: '< 2 in',
            type: 'flexibility',
            test: 'In a standing position, place one hand behind the head and back over the shoulder, and reach as far as possible down the middle of your back. Place the other arm behind your back, palm facing outward and fingers upward. Reach up as far as possible attempting to touch both hands. An assistant is required to direct the subject so that the fingers are aligned, and to measure the distance between the tips of the middle fingers.',
            comment:
              'Squats burn calories and might help you lose weight. They also lower your chances of injuring your knees and ankles. As you exercise, the movement strengthens your tendons, bones, and ligaments around the leg muscles.',
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
  male_20_39: {
    age: '20-39',
    sex: 'Male',
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
            name: 'Blood Pressure',
            average: '124/75',
            range: '',
            tooltip: '',
            type: 'cardiovascular',
            comment:
              'Blood pressure numbers of less than 120/80 mm Hg (millimeters of mercury) are considered within the normal range. If your results fall into this category, stick with heart-healthy habits like following a balanced diet and getting regular exercise. Ideal blood pressure is considered to be between 90/60mmHg and 120/80mmHg. high blood pressure is considered to be 140/90mmHg or higher. low blood pressure is considered to be below 90/60mmHg.',
          },
          {
            name: 'Resting Heart Rate',
            average: '124/75',
            range: '',
            tooltip: '',
            type: 'cardiovascular',
            comment:
              "A normal resting heart rate should be between 60 to 100 beats per minute, but it can vary from minute to minute. Your age and general health can also affect your pulse rate, so it's important to remember that a 'normal' pulse can vary from person to person.",
          },
          {
            name: 'Heart Rate Variability',
            average: '124/75',
            range: '',
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
            name: 'BMI',
            average: '29',
            range: '24-36',
            tooltip: '',
            type: 'physical',
            comment:
              'If your BMI is less than 18.5, it falls within the underweight range. If your BMI is 18.5 to 24.9, it falls within the Healthy Weight range. If your BMI is 25.0 to 29.9, it falls within the overweight range. If your BMI is 30.0 or higher, it falls within the obese range. The body mass index (BMI) is a measure that uses your height and weight to work out if your weight is healthy. For most adults, an ideal BMI is in the 18.5 to 24.9 range. For children and young people aged 2 to 18, the BMI calculation takes into account age and gender as well as height and weight.',
          },
          {
            name: 'Active Minutes Per Week',
            average: 'Mins per week: 150',
            tooltip: 'minutes per week',
            type: 'physical',
            comment:
              'Get at least 150 minutes per week of moderate-intensity aerobic activity or 75 minutes per week of vigorous aerobic activity, or a combination of both, preferably spread throughout the week.',
          },
          {
            name: 'Strength Training',
            average: 'Sessions per week: 2',
            tooltip: 'sessions per week',
            type: 'physical',
            comment:
              'The ideal breakdown of cardio and strength work varies depending on your specific goals, but in general, four to five days a week of exercise will do the trick if you’re aiming to improve or maintain your fitness.',
          },
          {
            name: 'Mile Time',
            average: 'Time: 13:00',
            range: '12:00 - 14:00',
            tooltip: 'minutes',
            type: 'physical',
            kilo_range: '7:00 - 8:30',
            kilo_avg: '7:45',
            comment:
              'The one-mile endurance run or walk test is a commonly used walk/run test of aerobic endurance. ',
          },
          {
            name: 'Push Ups',
            average: 'Reps: 10',
            range: '7-14 reps',
            tooltip: 'bent knee',
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
            name: 'Squat Rep Test',
            average: '27 - 29 reps',
            aboveAverage: '30 - 32 reps',
            excellent: '>34 reps',
            type: 'flexibility',
            test: "Stand in front of a chair or bench with your feet at shoulder's width apart, facing away from it. Place your hands on your hips. Squat down and lightly touch the chair before standing back up. A good sized chair is one that makes your knees at right angles when you are sitting. Keep doing this until you're fatigued.",
            comment:
              'Squats burn calories and might help you lose weight. They also lower your chances of injuring your knees and ankles. As you exercise, the movement strengthens your tendons, bones, and ligaments around the leg muscles.',
          },
          {
            name: 'Sit and Reach',
            average: '17.5 in',
            aboveAverage: '19.0 in',
            excellent: '20.5 in',
            type: 'flexibility',
            test: 'Sit on the floor with legs stretched out straight ahead. The soles of the feet are placed flat against the box. Both knees should be locked and pressed flat to the floor. With the palms facing downwards, and the hands on top of each other or side by side, the subject reaches forward along the measuring line as far as possible. Reach out and hold that position for at least one-two seconds while the distance is recorded.',
            comment:
              'Hamstring flexibility is highly desirable in most sports involving running and is an integral part of activities such as dancing, gymnastics and martial arts.The desire for hamstring flexibility in running sports is primarily aimed at reducing muscle tears or strains and improving running efficiency, agility and speed.',
          },
          {
            name: 'Shoulder Flexibility',
            belowAverage: '> 4.5 in',
            average: '4.5 in',
            superior: '< 0 in',
            type: 'flexibility',
            test: 'In a standing position, place one hand behind the head and back over the shoulder, and reach as far as possible down the middle of your back. Place the other arm behind your back, palm facing outward and fingers upward. Reach up as far as possible attempting to touch both hands. An assistant is required to direct the subject so that the fingers are aligned, and to measure the distance between the tips of the middle fingers.',
            comment:
              'Squats burn calories and might help you lose weight. They also lower your chances of injuring your knees and ankles. As you exercise, the movement strengthens your tendons, bones, and ligaments around the leg muscles.',
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
  male_40_59: {
    age: '40-59',
    sex: 'Male',
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
            name: 'Blood Pressure',
            average: '124/75',
            range: '',
            tooltip: '',
            type: 'cardiovascular',
            comment:
              'Blood pressure numbers of less than 120/80 mm Hg (millimeters of mercury) are considered within the normal range. If your results fall into this category, stick with heart-healthy habits like following a balanced diet and getting regular exercise. Ideal blood pressure is considered to be between 90/60mmHg and 120/80mmHg. high blood pressure is considered to be 140/90mmHg or higher. low blood pressure is considered to be below 90/60mmHg.',
          },
          {
            name: 'Resting Heart Rate',
            average: '124/75',
            range: '',
            tooltip: '',
            type: 'cardiovascular',
            comment:
              "A normal resting heart rate should be between 60 to 100 beats per minute, but it can vary from minute to minute. Your age and general health can also affect your pulse rate, so it's important to remember that a 'normal' pulse can vary from person to person.",
          },
          {
            name: 'Heart Rate Variability',
            average: '124/75',
            range: '',
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
            name: 'BMI',
            average: '29',
            range: '24-36',
            tooltip: '',
            type: 'physical',
            comment:
              'If your BMI is less than 18.5, it falls within the underweight range. If your BMI is 18.5 to 24.9, it falls within the Healthy Weight range. If your BMI is 25.0 to 29.9, it falls within the overweight range. If your BMI is 30.0 or higher, it falls within the obese range. The body mass index (BMI) is a measure that uses your height and weight to work out if your weight is healthy. For most adults, an ideal BMI is in the 18.5 to 24.9 range. For children and young people aged 2 to 18, the BMI calculation takes into account age and gender as well as height and weight.',
          },
          {
            name: 'Active Minutes Per Week',
            average: 'Mins per week: 150',
            tooltip: 'minutes per week',
            type: 'physical',
            comment:
              'Get at least 150 minutes per week of moderate-intensity aerobic activity or 75 minutes per week of vigorous aerobic activity, or a combination of both, preferably spread throughout the week.',
          },
          {
            name: 'Strength Training',
            average: 'Sessions per week: 2',
            tooltip: 'sessions per week',
            type: 'physical',
            comment:
              'The ideal breakdown of cardio and strength work varies depending on your specific goals, but in general, four to five days a week of exercise will do the trick if you’re aiming to improve or maintain your fitness.',
          },
          {
            name: 'Mile Time',
            average: 'Time: 13:00',
            range: '12:00 - 14:00',
            tooltip: 'minutes',
            type: 'physical',
            kilo_range: '7:00 - 8:30',
            kilo_avg: '7:45',
            comment:
              'The one-mile endurance run or walk test is a commonly used walk/run test of aerobic endurance. ',
          },
          {
            name: 'Push Ups',
            average: 'Reps: 10',
            range: '7-14 reps',
            tooltip: 'bent knee',
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
            name: 'Squat Rep Test',
            average: '21 - 23 reps',
            aboveAverage: '24 - 26 reps',
            excellent: '>29 reps',
            type: 'flexibility',
            test: "Stand in front of a chair or bench with your feet at shoulder's width apart, facing away from it. Place your hands on your hips. Squat down and lightly touch the chair before standing back up. A good sized chair is one that makes your knees at right angles when you are sitting. Keep doing this until you're fatigued.",
            comment:
              'Squats burn calories and might help you lose weight. They also lower your chances of injuring your knees and ankles. As you exercise, the movement strengthens your tendons, bones, and ligaments around the leg muscles.',
          },
          {
            name: 'Sit and Reach',
            average: '15 in',
            aboveAverage: '17 in',
            excellent: '19 in',
            type: 'flexibility',
            test: 'Sit on the floor with legs stretched out straight ahead. The soles of the feet are placed flat against the box. Both knees should be locked and pressed flat to the floor. With the palms facing downwards, and the hands on top of each other or side by side, the subject reaches forward along the measuring line as far as possible. Reach out and hold that position for at least one-two seconds while the distance is recorded.',
            comment:
              'Hamstring flexibility is highly desirable in most sports involving running and is an integral part of activities such as dancing, gymnastics and martial arts.The desire for hamstring flexibility in running sports is primarily aimed at reducing muscle tears or strains and improving running efficiency, agility and speed.',
          },
          {
            name: 'Shoulder Flexibility',
            belowAverage: '> 6.5 in',
            average: '6.5 - 1.5 in',
            superior: '< - 1.5 in',
            type: 'flexibility',
            test: 'In a standing position, place one hand behind the head and back over the shoulder, and reach as far as possible down the middle of your back. Place the other arm behind your back, palm facing outward and fingers upward. Reach up as far as possible attempting to touch both hands. An assistant is required to direct the subject so that the fingers are aligned, and to measure the distance between the tips of the middle fingers.',
            comment:
              'Squats burn calories and might help you lose weight. They also lower your chances of injuring your knees and ankles. As you exercise, the movement strengthens your tendons, bones, and ligaments around the leg muscles.',
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
            tooltip: '',
            type: 'cardiovascular',
            comment:
              'Blood pressure numbers of less than 120/80 mm Hg (millimeters of mercury) are considered within the normal range. If your results fall into this category, stick with heart-healthy habits like following a balanced diet and getting regular exercise. Ideal blood pressure is considered to be between 90/60mmHg and 120/80mmHg. high blood pressure is considered to be 140/90mmHg or higher. low blood pressure is considered to be below 90/60mmHg.',
          },
          {
            name: 'Resting Heart Rate',
            average: '74',
            range: '64-85',
            tooltip: '',
            type: 'cardiovascular',
            comment:
              "A normal resting heart rate should be between 60 to 100 beats per minute, but it can vary from minute to minute. Your age and general health can also affect your pulse rate, so it's important to remember that a 'normal' pulse can vary from person to person.",
          },
          {
            name: 'Heart Rate Variability',
            average: '52',
            range: '49-65',
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
            name: 'BMI',
            average: '29',
            range: '23-35',
            tooltip: '',
            type: 'physical',
            comment:
              'If your BMI is less than 18.5, it falls within the underweight range. If your BMI is 18.5 to 24.9, it falls within the Healthy Weight range. If your BMI is 25.0 to 29.9, it falls within the overweight range. If your BMI is 30.0 or higher, it falls within the obese range. The body mass index (BMI) is a measure that uses your height and weight to work out if your weight is healthy. For most adults, an ideal BMI is in the 18.5 to 24.9 range. For children and young people aged 2 to 18, the BMI calculation takes into account age and gender as well as height and weight.',
          },
          {
            name: 'Active Minutes Per Week',
            average: 'Mins per week: 150',
            tooltip: 'minutes per week',
            type: 'physical',
            comment:
              'Get at least 150 minutes per week of moderate-intensity aerobic activity or 75 minutes per week of vigorous aerobic activity, or a combination of both, preferably spread throughout the week.',
          },
          {
            name: 'Strength Training',
            average: 'Sessions per week: 2',
            tooltip: 'sessions per week',
            type: 'physical',
            comment:
              'The ideal breakdown of cardio and strength work varies depending on your specific goals, but in general, four to five days a week of exercise will do the trick if you’re aiming to improve or maintain your fitness.',
          },
          {
            name: 'Mile Time',
            average: '12:43',
            range: '11:36 - 15:08',
            tooltip: 'minutes',
            type: 'physical',
            kilo_range: '7:00 - 8:30',
            kilo_avg: '7:45',
            comment:
              'The one-mile endurance run or walk test is a commonly used walk/run test of aerobic endurance. ',
          },
          {
            name: 'Push Ups',
            average: '9',
            range: '6-13',
            tooltip: 'standard push up',
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
            name: 'Squat Rep Test',
            average: '15 - 17 reps',
            aboveAverage: '18 - 20 reps',
            excellent: '>23 reps',
            type: 'flexibility',
            test: "Stand in front of a chair or bench with your feet at shoulder's width apart, facing away from it. Place your hands on your hips. Squat down and lightly touch the chair before standing back up. A good sized chair is one that makes your knees at right angles when you are sitting. Keep doing this until you're fatigued.",
            comment:
              'Squats burn calories and might help you lose weight. They also lower your chances of injuring your knees and ankles. As you exercise, the movement strengthens your tendons, bones, and ligaments around the leg muscles.',
          },
          {
            name: 'Sit and Reach',
            average: '13 in',
            aboveAverage: '14.5 in',
            excellent: '16 in',
            type: 'flexibility',
            test: 'Sit on the floor with legs stretched out straight ahead. The soles of the feet are placed flat against the box. Both knees should be locked and pressed flat to the floor. With the palms facing downwards, and the hands on top of each other or side by side, the subject reaches forward along the measuring line as far as possible. Reach out and hold that position for at least one-two seconds while the distance is recorded.',
            comment:
              'Hamstring flexibility is highly desirable in most sports involving running and is an integral part of activities such as dancing, gymnastics and martial arts.The desire for hamstring flexibility in running sports is primarily aimed at reducing muscle tears or strains and improving running efficiency, agility and speed.',
          },
          {
            name: 'Shoulder Flexibility',
            belowAverage: '> 7.5 in',
            average: '7.5 - 2 in',
            superior: '< 2 in',
            type: 'flexibility',
            test: 'In a standing position, place one hand behind the head and back over the shoulder, and reach as far as possible down the middle of your back. Place the other arm behind your back, palm facing outward and fingers upward. Reach up as far as possible attempting to touch both hands. An assistant is required to direct the subject so that the fingers are aligned, and to measure the distance between the tips of the middle fingers.',
            comment:
              'Squats burn calories and might help you lose weight. They also lower your chances of injuring your knees and ankles. As you exercise, the movement strengthens your tendons, bones, and ligaments around the leg muscles.',
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
