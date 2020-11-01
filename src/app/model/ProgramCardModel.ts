export interface ProgramCardModel {
  missionImg : string;
  missionName : string;
  flightNumber : number;
  missionIds : string[];
  launchYear : string;
  successfulLaunch : boolean;
  successfulLand : boolean; 
}

export class ProgramCardModel{
  constructor(
  public missionImg : string,
  public missionName : string,
  public flightNumber : number,
  public missionIds : string[],
  public launchYear : string,
  public successfulLaunch : boolean,
  public successfulLand : boolean
  ){}
}