'use strict';

import ConfigService from '../../../../services/configService';
import AuthoringToolProjectService from '../../../authoringToolProjectService';

class TopBarController {
  avatarColor: any;
  workgroupId: number;
  userInfo: any;
  themePath: string;
  contextPath: string;

  static $inject = ['$rootScope', '$window', 'ConfigService', 'ProjectService'];

  constructor(
    private $rootScope: any,
    private $window: any,
    private ConfigService: ConfigService,
    private ProjectService: AuthoringToolProjectService
  ) {
    this.workgroupId = this.ConfigService.getWorkgroupId();
    if (this.workgroupId == null) {
      this.workgroupId = 100 * Math.random();
    }
    this.avatarColor = this.ConfigService.getAvatarColorForWorkgroupId(this.workgroupId);
    this.userInfo = this.ConfigService.getMyUserInfo();
    this.themePath = this.ProjectService.getThemePath();
    this.contextPath = this.ConfigService.getContextPath();
  }

  helpButtonClicked() {
    this.$window.open(
      'https://docs.google.com/document/d/1G8lVtiUlGXLRAyFOvkEdadHYhJhJLW4aor9dol2VzeU',
      '_blank'
    );
  }

  goHome() {
    this.ProjectService.notifyAuthorProjectEnd().then(() => {
      this.$rootScope.$broadcast('goHome');
    });
  }

  logOut() {
    this.$rootScope.$broadcast('logOut');
  }
}

const TopBar = {
  bindings: {
    logoPath: '@',
    projectId: '<',
    projectTitle: '<',
    runId: '<'
  },
  controller: TopBarController,
  template: `<md-toolbar class="l-header">
      <div class="md-toolbar-tools">
        <span class="md-button logo-link">
          <a href="{{::$ctrl.contextPath}}/teacher" target="_self">
            <img ng-src="{{ ::$ctrl.logoPath }}" alt="{{ ::'WISE_LOGO' | translate }}" class="logo" />
          </a>
        </span>
        <span flex>
        <h3>
          <span ng-if="$ctrl.projectTitle" id="projectTitleSpan">{{ $ctrl.projectTitle }}</span>
          <span ng-if="!$ctrl.projectTitle" id="projectTitleSpan">{{ ::'authoringTool' | translate }}</span>
          <span class="md-caption" ng-if="$ctrl.projectId">
            ({{ 'PROJECT_ID_DISPLAY' | translate:{id: $ctrl.projectId} }}<span class="md-caption" ng-if="$ctrl.runId"> | {{ 'RUN_ID_DISPLAY' | translate:{id: $ctrl.runId} }}</span>)
          </span>
        </h3>
        </span>
        <md-button style="text-transform: none;"
            ng-click="$ctrl.helpButtonClicked()">{{ ::'HELP' | translate }}</md-button>
        <md-menu id='accountMenu' md-position-mode="target-right target" md-offset="8 26">
          <md-button aria-label="{{ ::'USER_MENU' | translate }}" class="md-icon-button" ng-click="$mdMenu.open($event)">
            <md-icon md-menu-origin> account_box </md-icon>
          </md-button>
          <md-menu-content width="5" class="account-menu">
            <ng-include src="::$ctrl.themePath + '/templates/teacherAccountMenu.html'"></ng-include>
          </md-menu-content>
        </md-menu>
      </div>
    </md-toolbar>`
};

export default TopBar;
