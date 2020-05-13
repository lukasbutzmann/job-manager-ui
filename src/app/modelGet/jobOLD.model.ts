export class JobOld {
  public id: string;
  public name: string;
  public description: string;
  public useCase: string;
  public created: string;
  public status: string;
  public executionPattern: string;
  public temporalCoverageDuration: string;
  public areaOfInterestExtend: [];
  public processingTool: string;
  public productCollection: string;
  public sourceType: string;
  public identifier: string;
  public satellite: string;
  public maximumCloudCoverage: number;


  constructor( name: string, description: string, created: string, status: string, maximumCloudCoverage: number) {
    this.name = name;
    this.description = description;
    this.created = created;
    this.status = status;
    this.maximumCloudCoverage = maximumCloudCoverage;
  }
}

