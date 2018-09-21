import { Injectable } from '@angular/core';
import { Observable ,  of, Subject } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { LibraryGroup } from "../modules/library/libraryGroup";
import { ProjectFilterOptions } from "../domain/projectFilterOptions";
import { LibraryProject } from "../modules/library/libraryProject";
import { Project } from "../domain/project";

@Injectable()
export class LibraryService {

  private libraryGroupsUrl = 'api/project/library';
  private communityProjectsUrl = 'api/project/community';
  private personalProjectsUrl = 'api/project/personal';
  private sharedProjectsUrl = 'api/project/shared';
  private copyProjectUrl = 'api/project/copy';
  private projectInfoUrl = 'api/project/info';
  public libraryGroups: LibraryGroup[];
  private libraryGroupsSource = new Subject<LibraryGroup[]>();
  public libraryGroupsSource$ = this.libraryGroupsSource.asObservable();
  private officialLibraryProjectsSource = new Subject<LibraryProject[]>();
  public officialLibraryProjectsSource$ = this.officialLibraryProjectsSource.asObservable();
  private communityLibraryProjectsSource = new Subject<LibraryProject[]>();
  public communityLibraryProjectsSource$ = this.communityLibraryProjectsSource.asObservable();

  private personalLibraryProjectsSource = new Subject<LibraryProject[]>();
  public personalLibraryProjectsSource$ = this.personalLibraryProjectsSource.asObservable();

  private sharedLibraryProjectsSource = new Subject<LibraryProject[]>();
  public sharedLibraryProjectsSource$ = this.sharedLibraryProjectsSource.asObservable();

  private projectFilterOptionsSource = new Subject<ProjectFilterOptions>();
  public projectFilterOptionsSource$ = this.projectFilterOptionsSource.asObservable();

  private newProjectSource = new Subject<LibraryProject>();
  public newProjectSource$ = this.newProjectSource.asObservable();

  private tabIndexSource = new Subject<number>();
  public tabIndexSource$ = this.tabIndexSource.asObservable();

  implementationModelValue: string = '';
  implementationModelOptions: LibraryGroup[] = [];

  constructor(private http: HttpClient) { }

  getOfficialLibraryProjects() {
    this.http.get<LibraryGroup[]>(this.libraryGroupsUrl).subscribe((libraryGroups) => {
      this.libraryGroups = libraryGroups;
      this.implementationModelOptions = [];
      const projects: LibraryProject[] = [];
      for (let group of this.libraryGroups) {
        if (!this.implementationModelValue) {
          this.implementationModelValue = group.id;
        }
        this.implementationModelOptions.push(group);

        this.populateProjects(group, group.id, projects);
      }
      this.officialLibraryProjectsSource.next(projects);
      this.libraryGroupsSource.next(libraryGroups);
    });
  }

  getCommunityLibraryProjects() {
    this.http.get<LibraryProject[]>(this.communityProjectsUrl).subscribe((projects) => {
      const communityLibraryProjects: LibraryProject[] = this.convertToLibraryProjects(projects);
      this.communityLibraryProjectsSource.next(communityLibraryProjects);
    });
  }

  getPersonalLibraryProjects() {
    this.http.get<LibraryProject[]>(this.personalProjectsUrl).subscribe((projects) => {
      const personalLibraryProjects: LibraryProject[] = this.convertToLibraryProjects(projects);
      this.personalLibraryProjectsSource.next(personalLibraryProjects);
    });
  }

  getSharedLibraryProjects() {
    this.http.get<LibraryProject[]>(this.sharedProjectsUrl).subscribe((projects) => {
      const sharedLibraryProjects: LibraryProject[] = this.convertToLibraryProjects(projects);
      for (let sharedLibraryProject of sharedLibraryProjects) {
        sharedLibraryProject.shared = true;
      }
      this.sharedLibraryProjectsSource.next(sharedLibraryProjects);
    });
  }

  convertToLibraryProjects(projectsJSON) {
    const libraryProjects: LibraryProject[] = [];
    for (let project of projectsJSON) {
      const libraryProject = new LibraryProject(project);
      libraryProjects.push(libraryProject);
    }
    return libraryProjects;
  }

  /**
   * Add given project or all child projects from a given group to the list of projects
   * @param item
   * @param {string} implementationModel
   */
  populateProjects(item: any, implementationModel: string, projects: LibraryProject[]): void {
    if (item.type === 'project') {
      item.visible = true;
      item.implementationModel = implementationModel;
      projects.push(item);
    } else if (item.type === 'group') {
      let children = item.children;
      for (let child of children) {
        this.populateProjects(child, implementationModel, projects);
      }
    }
  }

  copyProject(projectId) {
    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    let body = new HttpParams();
    body = body.set('projectId', projectId + "");
    return this.http.post(this.copyProjectUrl, body, { headers: headers });
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private log(message: string) {
    console.log('LibraryService: ' + message);
  }

  filterOptions(projectFilterOptions: ProjectFilterOptions) {
    this.projectFilterOptionsSource.next(projectFilterOptions);
  }

  setTabIndex(index: number) {
    this.tabIndexSource.next(index);
  }

  addPersonalLibraryProject(project: LibraryProject) {
    this.newProjectSource.next(project);
  }

  getProjectInfo(projectId): Observable<Project> {
    return this.http.get<Project>(this.projectInfoUrl + "/" + projectId);
  }
}