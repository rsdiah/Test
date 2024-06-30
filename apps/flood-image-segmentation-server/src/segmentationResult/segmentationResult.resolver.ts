import * as graphql from "@nestjs/graphql";
import { SegmentationResultResolverBase } from "./base/segmentationResult.resolver.base";
import { SegmentationResult } from "./base/SegmentationResult";
import { SegmentationResultService } from "./segmentationResult.service";

@graphql.Resolver(() => SegmentationResult)
export class SegmentationResultResolver extends SegmentationResultResolverBase {
  constructor(protected readonly service: SegmentationResultService) {
    super(service);
  }
}
