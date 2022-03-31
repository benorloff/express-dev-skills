const skills = [
    {id: 125223, skill: 'Pseudocoding', difficulty: 'easy'},
    {id: 127904, skill: 'MVC Architecture', difficulty: 'medium'},
    {id: 139608, skill: 'HTTP Request Types', difficulty: 'easy'},
    {id: 131154, skill: 'Version Control', difficulty: 'medium'},
    {id: 147623, skill: 'HTML5 & CSS3', difficulty: 'medium'},
    {id: 122298, skill: 'Node.js & Express', difficulty: 'hard'},
    {id: 139111, skill: 'MongoDB', difficulty: 'hard'},
    {id: 149285, skill: 'Authentication', difficulty: 'hard'}
  ];
  
  module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    updateOne
  };

  function create(skill, difficulty) {
    skill.id = Date.now() % 1000000;
    skills.push(skill);
  }
  
  function getAll() {
    return skills;
  }

  function getOne(id) {
    // Use the Array.prototype.find iterator method
    return skills.find(skills => skills.id === parseInt(id));
  }

  function deleteOne(id) {
    const idx = skills.findIndex(skills => skills.id === parseInt(id));
    skills.splice(idx, 1);
  }

  function updateOne(id, skill, difficulty) {
    const idx = skills.findIndex(skills => skills.id === parseInt(id));
    skills[idx].skill = skill;
    skills[idx].difficulty = difficulty;
  }
 