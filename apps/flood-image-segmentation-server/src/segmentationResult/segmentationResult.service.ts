import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SegmentationResultServiceBase } from "./base/segmentationResult.service.base";

@Injectable()
export class SegmentationResultService extends SegmentationResultServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
