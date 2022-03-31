const Skill = require('../models/skill');

module.exports = {
    index,
    show,
    new: newSkill,
    create,
    delete: deleteSkill,
    edit,
    update
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

  function edit(req, res) {
    res.render('skills/edit', {
      skill: Skill.getOne(req.params.id)
    })
  }

  function update(req, res) {
    Skill.updateOne(req.params.id, req.body.skill, req.body.difficulty);
    res.redirect('/skills')
  }