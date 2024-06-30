import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SegmentationResultService } from "./segmentationResult.service";
import { SegmentationResultControllerBase } from "./base/segmentationResult.controller.base";

@swagger.ApiTags("segmentationResults")
@common.Controller("segmentationResults")
export class SegmentationResultController extends SegmentationResultControllerBase {
  constructor(protected readonly service: SegmentationResultService) {
    super(service);
  }
}
