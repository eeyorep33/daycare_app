const reports=[{ id: 1,name:'Evelyn', student_id: 2,room:9,teachers: "",feeding:[],nap:[],comments:[], meds:[], diapering:[],playtime:[],supplies:[], email:''}]
const students=[{id: 1, name:'', room:"", status: "", email:""}]
const teachers= [{id: 2, name:'', initials:'',room:"", status:''}]
.then(function (report_ids)
        {
        
         knex('feeding').insert([
          { time: '10:00 am', food: 'bottle', amount: '8 oz'},
          { time: '12:00 pm', food: 'cheerios', amount: 'most'},
          { time: '2:00 pm', food: 'bottle', amount: '7 oz'},
          { time: '7:00 am', food: 'bottle', amount: '5 oz'},
          { time: '9:00 am', food: 'gold fish', amount: 'some'},
          { time: '11:00 am', food: 'baby food', amount: 'none'},
          { time: '8:00 am', food: 'bottle', amount: '6 oz'},
            { time: '10:00 am', food: 'baby food', amount: 'all'},
            { time: '12:00 pm', food: 'bottle', amount: '3 oz' ,              
        }]);
        knex(diapering).insert([
          { time: '6:45 am', type: 'W', initials: 'AL'},
          { time: '8:45 am', type: 'B', initials: 'AL'},
          { time: '10:45', type: 'W', initials: 'AS'},
          { time: '7:30 am', type: 'W', initials: 'GF'},
            { time: '9:30 am', type: 'W', initials: 'GF'},
            { time: '10:30 am', type: 'B', initials: 'AL'},
            { time: '6:45 am', type: 'W', initials: 'NB'},
            { time: '7:15 am', type: 'B', initials: 'NB'},
            { time: '9:15 am', type: 'W', initials: 'KL'}

        
        ]);
        knex(nap).insert([
          { startTime: '8:00 am', stopTime: '8:30 am'},
          { startTime: '1:00 pm', stopTime: '2:10 pm'},
          { startTime: '1:12 pm', stopTime: '2:09 pm'},
          { startTime: '7:23 am', stopTime: '9:45 am'},

        ])
        knex(playTime).insert([
          { type: 'motor skills', activity: 'putting blocks in holes'},
          { type: 'Cognitive Development', activity: 'The crunchy bunch'},
          { type: 'social emotional', activity: 'big rule, little rule'},
          { type: 'Language arts', activity: 'Our names, our things'},
        ])   
       knex(meds).insert([
        { time: '8:00 am', name: 'inhaler', amount: '2 puffs'},
        { time: '12:00 pm', name: 'inhaler', amount: '2 puffs'},
        { time: '10:00 am', name: 'Amoxicillan', amount: '5 ml'}
])
knex(supplies).insert([
  {supply_item:"need snacks"},
  {supply_item:"need diapers"}
])
knex(comment).insert([
  {comment:"was fussy all day"},
  {comment:"very happy"}
])

      })
     

      exports.seed = function (knex, Promise) {
        // Deletes ALL existing entries
        return knex('report').del()
          .then(function () {
            // Inserts seed entries
            return knex('report').insert([
              {
      
                student_id: 1,
                date: '02/06/18'
      
              },
              {
      
                student_id: 2,
                date: '02/08/18'
      
      
              },
              {
      
                student_id: 3,
                date: '04/06/17'
              }
            ])
      
      
      
          })
      
        }
        exports.seed = function(knex, Promise) {
          // Deletes ALL existing entries
          return knex('classroom').del()
            .then(function () {
              // Inserts seed entries
              return knex('classroom').insert([
                { name: ' classroom 1'},
                { name: 'Classroom 2'},
                { name: 'Classroom 3'},
                {name:'Classroom 4'},
                {name:'Classroom 5'}
              ]);
            });
        };
        
      
    
    
    

    
    
    
    
    
    
  
    
    
    
    







