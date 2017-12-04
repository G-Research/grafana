// import _ from 'lodash';
import coreModule from '../../core_module';

export class SearchResultsCtrl {
  results: any;

  toggleFolder(section, evt) {
    if (evt && evt.target.nodeName === 'LABEL') {
      section.checked = !section.checked;
    } else {
      if (section.toggle) {
        section.toggle(section);
      }
    }
  }
}

export function searchResultsDirective() {
  return {
    restrict: 'E',
    templateUrl: 'public/app/core/components/search/search_results.html',
    controller: SearchResultsCtrl,
    bindToController: true,
    controllerAs: 'ctrl',
    scope: {
      edit: '@',
      results: '='
    },
  };
}

coreModule.directive('dashboardSearchResults', searchResultsDirective);
