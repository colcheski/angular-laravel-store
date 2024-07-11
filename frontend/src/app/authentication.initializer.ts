import { AuthenticationService } from './authentication.service';
import { firstValueFrom } from 'rxjs';

export function authenticationInitializer(authenticationService: AuthenticationService): () => Promise<void> {
  return async (): Promise<void> => {
    try {
      return await firstValueFrom(authenticationService.checkUserSession());
    } catch {
      // User is not currently logged in, we dont need to do anything
    }
  };
}
