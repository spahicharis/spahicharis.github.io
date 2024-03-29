import {SwUpdate} from "@angular/service-worker";
import {Injectable} from "@angular/core";

@Injectable({providedIn: 'root'})
export class LogUpdateService {

  constructor(updates: SwUpdate) {
    updates.versionUpdates.subscribe(evt => {
      switch (evt.type) {
        case 'VERSION_DETECTED':
          console.log(`Downloading new app version: ${evt.version.hash}`);
          break;
        case 'VERSION_READY':
          console.log(`Current app version: ${evt.currentVersion.hash}`);
          console.log(`New app version ready for use: ${evt.latestVersion.hash}`);

          if (confirm("New app version ready. Reload?")) {
            // Reload the page to update to the latest version.
            document.location.reload();
          }

          break;
        case 'VERSION_INSTALLATION_FAILED':
          console.log(`Failed to install app version '${evt.version.hash}': ${evt.error}`);
          break;
      }
    });
  }
}
