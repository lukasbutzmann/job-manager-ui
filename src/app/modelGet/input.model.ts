// Single interface with optional attributes.
export interface Input {
  identifier: string;
  sourceType: string;

  // StaticSubsetDefinition
  dataType?: string;
  value?: string;

  // CopernicusSubsetDefinition
  maximumCloudCoverage?: number;
  satellite?: string;
}



// Multiple interfaces with pipe OPERATOR (variants, union types, ...), i.e. | in job.model
/*
export interface Input {
  identifier: string;
  sourceType: string;
}

export interface StaticSubsetDefinition {
  dataType: string;
  value: string;
}

export interface CopernicusSubsetDefinition {
  maximumCloudCoverage: number;
  satellite: string;
}
 */


// Class inheritance
/*
export class Input {
  identifier: string;
  sourceType: string;
}

export class StaticSubsetDefinition extends Input {
  dataType: string;
  value: string;
}

export class CopernicusSubsetDefinition extends Input {
  maximumCloudCoverage: number;
  satellite: string;
}
*/
