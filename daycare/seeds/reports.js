
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('report').del()
    .then(function () {
      // Inserts seed entries
      return knex('report').insert([
        {
          
          student_id: 1,
          date: '2/6/18'
        },
        {
          
          student_id: 2,
          date: '3/5/18'
          
        },
        {
        
          student_id: 3,
          date: '6/30/18'
          
        }
      ]).returning('id');



     }).then(function (report_ids)
        {
        
         knex('feeding').insert([
          { time: '10:00 am', food: 'bottle', amount: '8 oz', report_id: report_ids[0]},
          { time: '12:00 pm', food: 'cheerios', amount: 'most', report_id:report_ids[0] },
          { time: '2:00 pm', food: 'bottle', amount: '7 oz', report_id:report_ids[1] },
          { time: '7:00 am', food: 'bottle', amount: '5 oz', report_id:report_ids[1] },
          { time: '9:00 am', food: 'gold fish', amount: 'some', report_id:report_ids[2] },
          { time: '11:00 am', food: 'baby food', amount: 'none', report_id:report_ids[2]},
          { time: '8:00 am', food: 'bottle', amount: '6 oz', report_id: report_ids[0] },
            { time: '10:00 am', food: 'baby food', amount: 'all', report_id: report_ids[1] },
            { time: '12:00 pm', food: 'bottle', amount: '3 oz' , report_id:report_ids[2]              
        }]);
        knex(diapering).insert([
          { time: '6:45 am', type: 'W', initials: 'AL', report_id: report_ids[0] },
          { time: '8:45 am', type: 'B', initials: 'AL', report_id: report_ids[0] },
          { time: '10:45', type: 'W', initials: 'AS', report_id: report_ids[0] },
          { time: '7:30 am', type: 'W', initials: 'GF', report_id: report_ids[1] },
            { time: '9:30 am', type: 'W', initials: 'GF', report_id: report_ids[1] },
            { time: '10:30 am', type: 'B', initials: 'AL', report_id: report_ids[2] },
            { time: '6:45 am', type: 'W', initials: 'NB', report_id: report_ids[2] },
            { time: '7:15 am', type: 'B', initials: 'NB', report_id: report_ids[2] },
            { time: '9:15 am', type: 'W', initials: 'KL', report_id: report_ids[1] }

        
        ]);
        knex(nap).insert([
          { startTime: '8:00 am', stopTime: '8:30 am',  report_id:report_ids[0] },
          { startTime: '1:00 pm', stopTime: '2:10 pm',  report_id:report_ids[0] },
          { startTime: '1:12 pm', stopTime: '2:09 pm',  report_id:report_ids[1] },
          { startTime: '7:23 am', stopTime: '9:45 am',  report_id:report_ids[2] },

        ])
        knex(playTime).insert([
          { type: 'motor skills', activity: 'putting blocks in holes', report_id: report_ids[0] },
          { type: 'Cognitive Development', activity: 'The crunchy bunch', report_id: report_ids[1] },
          { type: 'social emotional', activity: 'big rule, little rule', report_id: report_ids[1] },
          { type: 'Language arts', activity: 'Our names, our things', report_id: report_ids[2] },
        ])   
       knex(meds).insert([
        { time: '8:00 am', name: 'inhaler', amount: '2 puffs', report_id:report_ids[0] },
        { time: '12:00 pm', name: 'inhaler', amount: '2 puffs', report_id:report_ids[1] },
        { time: '10:00 am', name: 'Amoxicillan', amount: '5 ml', report_id:report_ids[2] }
])
knex(supplies).insert([
  {supply_item:"need snacks", report_id:report_ids[0]},
  {supply_item:"need diapers", report_id:report_ids[1]}
])
knex(comment).insert([
  {comment:"was fussy all day", report_id:report_ids[0]},
  {comment:"very happy", report_id:report_ids[2]}
])

      })

  
  

 

         
    }   