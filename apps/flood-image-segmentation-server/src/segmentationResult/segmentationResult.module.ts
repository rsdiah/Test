import { Module } from "@nestjs/common";
import { SegmentationResultModuleBase } from "./base/segmentationResult.module.base";
import { SegmentationResultService } from "./segmentationResult.service";
import { SegmentationResultController } from "./segmentationResult.controller";
import { SegmentationResultResolver } from "./segmentationResult.resolver";

@Module({
  imports: [SegmentationResultModuleBase],
  controllers: [SegmentationResultController],
  providers: [SegmentationResultService, SegmentationResultResolver],
  exports: [SegmentationResultService],
})
export class SegmentationResultModule {}
