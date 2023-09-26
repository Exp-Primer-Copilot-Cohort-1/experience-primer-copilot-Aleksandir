function skillsMember() {
  return {
    restrict: 'E',
    templateUrl: 'partials/skills-member.html',
    controller: 'SkillsController',
    controllerAs: 'skillsCtrl',
    bindToController: true
  };
}