import { Injectable, OnApplicationBootstrap, OnApplicationShutdown } from "@nestjs/common";


@Injectable()
export class RefreshTokenIdsStorage implements OnApplicationBootstrap, OnApplicationShutdown{

}
