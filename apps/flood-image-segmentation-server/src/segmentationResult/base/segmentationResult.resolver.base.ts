/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { SegmentationResult } from "./SegmentationResult";
import { SegmentationResultCountArgs } from "./SegmentationResultCountArgs";
import { SegmentationResultFindManyArgs } from "./SegmentationResultFindManyArgs";
import { SegmentationResultFindUniqueArgs } from "./SegmentationResultFindUniqueArgs";
import { CreateSegmentationResultArgs } from "./CreateSegmentationResultArgs";
import { UpdateSegmentationResultArgs } from "./UpdateSegmentationResultArgs";
import { DeleteSegmentationResultArgs } from "./DeleteSegmentationResultArgs";
import { SegmentationResultService } from "../segmentationResult.service";
@graphql.Resolver(() => SegmentationResult)
export class SegmentationResultResolverBase {
  constructor(protected readonly service: SegmentationResultService) {}

  async _segmentationResultsMeta(
    @graphql.Args() args: SegmentationResultCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [SegmentationResult])
  async segmentationResults(
    @graphql.Args() args: SegmentationResultFindManyArgs
  ): Promise<SegmentationResult[]> {
    return this.service.segmentationResults(args);
  }

  @graphql.Query(() => SegmentationResult, { nullable: true })
  async segmentationResult(
    @graphql.Args() args: SegmentationResultFindUniqueArgs
  ): Promise<SegmentationResult | null> {
    const result = await this.service.segmentationResult(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => SegmentationResult)
  async createSegmentationResult(
    @graphql.Args() args: CreateSegmentationResultArgs
  ): Promise<SegmentationResult> {
    return await this.service.createSegmentationResult({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => SegmentationResult)
  async updateSegmentationResult(
    @graphql.Args() args: UpdateSegmentationResultArgs
  ): Promise<SegmentationResult | null> {
    try {
      return await this.service.updateSegmentationResult({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => SegmentationResult)
  async deleteSegmentationResult(
    @graphql.Args() args: DeleteSegmentationResultArgs
  ): Promise<SegmentationResult | null> {
    try {
      return await this.service.deleteSegmentationResult(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}