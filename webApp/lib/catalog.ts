import { AggregateElset } from "../models/aggregate-elset";
import { CurrentElset } from "../models/current-elset";
import { OnOrbit } from "../models/onorbit";

export async function retrieveCurrentElset() : Promise<CurrentElset[]>{
  //retrieve data from UDL, aggregate and return here
  const url = new URL('https://unifieddatalibrary.com/udl/elset/current?sort=satNo,ASC&maxResults=1000');
  const headers = {
      "Authorization": "Basic YWJhY2E6ZnVjZWwtOEwhITEyMzQ1Njc="
  };
  console.log('calling fetch');
  const response = await fetch( url.toString(), {headers} );
  const json = response.json();
  return await json as CurrentElset[];
}
export async function retrieveOnOrbit() : Promise<OnOrbit[]>{
  //retrieve data from UDL, aggregate and return here
  const url = new URL('https://unifieddatalibrary.com/udl/onorbit');
  const headers = {
      "Authorization": "Basic YWJhY2E6ZnVjZWwtOEwhITEyMzQ1Njc="
  };
  console.log('calling fetch');
  const response = await fetch( url.toString(), {headers} );
  const json = response.json();
  return await json as OnOrbit[];
}

export async function retrieveCatalog() : Promise<AggregateElset[]> {
    const currentElsets = await retrieveCurrentElset();
    const onOrbit = await retrieveOnOrbit();

    let aggregateElset : AggregateElset[] = [];

    currentElsets.forEach(currentElset => {
      //find matching onOrbit data
      let objectOnOrbit : OnOrbit = onOrbit.find(onOrbitObject => onOrbitObject.satNo === currentElset.satNo);
      //create aggregate elset object
      let aggregateEl : AggregateElset= {
        satno: currentElset.satNo,
        idonorbit: currentElset.idOnOrbit,
        idelset: currentElset.idElset,
        commonName: objectOnOrbit.commonName,
        classificationmarking: objectOnOrbit.classificationMarking,
        intldes: objectOnOrbit.intlDes,
        objecttype: objectOnOrbit.objectType,
        source: currentElset.source,
        datamode: currentElset.dataMode,
        period: currentElset.period,
        country: objectOnOrbit.countryCode,
        inclination: currentElset.inclination,
        apogee: currentElset.apogee,
        perigee: currentElset.perigee,
        launchdate: new Date(objectOnOrbit.launchDate),
        origin: objectOnOrbit.origin,
        rcs: objectOnOrbit.rcs,
      }
      //push created aggregate elset object      
      aggregateElset.push(aggregateEl);
      
    });
    
    return aggregateElset;
      
}