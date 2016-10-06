(function() {
	var app = angular.module('tools', [ ]);

	app.controller('HeaderController', function()
		{
			this.pages = pages_array;
	});

	app.controller('StandardsController', function() {
			this.projects = projects;
			this.standards = standards;

			for (p in this.projects) {
				project = this.projects[p];
				project["display"] = true;
				project["alignments"] = []
				for(s in this.standards) {
					standard = this.standards[s];
					for(a in project.standards) {
						standard_id = project.standards[a];
						if (standard_id === standard.id){
							project.alignments.push(standard);
						}

					}
				}
			}

			this.select_all = true;
			this.selection = [];

			this.filterBy = function(selected) {
				index = this.selection.indexOf(selected)
				if (index === -1) {
					this.selection.push(selected);
					this.select_all = false;
				} else {
					this.selection.splice(index, 1);
					if (this.selection.length === 0){
						this.select_all = true;
					}
				}
				
			}


	});
		
})();