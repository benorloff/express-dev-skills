const Skill = require('../models/skill');

module.exports = {
    index,
    show,
    new: newSkill,
    create,
    delete: deleteSkill,
    update: updateSkill
  };

  function create(req, res) {
    console.log(req.body);
    Skill.create(req.body);
    res.redirect('/skills');
  }
  
  function index(req, res) {
    res.render('skills/index', {
      skills: Skill.getAll()
    });
  }

  function show(req, res) {
    res.render('skills/show', {
      s: Skill.getOne(req.params.id)
    });
  }

  function newSkill(req, res) {
    res.render('skills/new');
  }

  function deleteSkill(req, res) {
    Skill.deleteOne(req.params.id);
    res.redirect('/skills')
  }

  function updateSkill(req, res) {
    console.log(req.params.id);
    console.log(req.body.skill);
    console.log(req.body.difficulty);
    Skill.updateOne(req.body.skill, req.body.difficulty);
    res.render('skills/update')
  }